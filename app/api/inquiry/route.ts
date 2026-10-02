import { createHash } from "node:crypto";
import { labels, fieldError, setupMessage, type Field, type Values, type Errors } from "../../../lib/setup";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return Response.json({ success: false }, { status: 403 });
  if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({ success: false }, { status: 415 });
  let body: Record<string, unknown>;
  try {
    const text = await request.text();
    if (Buffer.byteLength(text) > 8192) return Response.json({ success: false }, { status: 413 });
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid request");
    body = parsed;
  } catch { return Response.json({ success: false }, { status: 400 }); }
  if (body.botcheck) return Response.json({ success: false }, { status: 400 });
  const values = {} as Values;
  const errors: Errors = {};
  for (const field of Object.keys(labels) as Field[]) {
    values[field] = typeof body[field] === "string" ? (body[field] as string).trim() : "";
    const error = fieldError(field, values[field]);
    if (error) errors[field] = error;
  }
  if (Object.keys(errors).length) return Response.json({ success: false, errors }, { status: 422 });
  if (typeof body.requestId !== "string" || !/^[a-f0-9-]{36}$/i.test(body.requestId)) return Response.json({ success: false }, { status: 400 });
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!key || !from) return Response.json({ success: false }, { status: 503 });
  try {
    // Stable across retries of the same answers; changed answers get a new key.
    const hash = createHash("sha256").update(JSON.stringify(values)).digest("hex");
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST", signal: AbortSignal.timeout(15000),
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "Idempotency-Key": `tajo/${body.requestId}/${hash}` },
      body: JSON.stringify({ from, to: ["tajopartners@gmail.com"], reply_to: values.email,
        subject: `TAJO setup inquiry — ${values.name}`, text: setupMessage(values) }),
    });
    const result = await response.json();
    if (!response.ok || typeof result?.id !== "string" || !result.id) throw new Error("Delivery rejected");
    return Response.json({ success: true });
  } catch {
    // Do not expose credentials, provider details or contact data in errors.
    return Response.json({ success: false }, { status: 502 });
  }
}
