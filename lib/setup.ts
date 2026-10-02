export const labels = {
  name: "Name", business: "Business name or website", email: "Email", phone: "Phone",
  kind: "What kind of business do you run?", source: "Where do most new inquiries come from?",
  followup: "What happens when someone doesn’t book right away?",
};
export type Field = keyof typeof labels;
export type Values = Record<Field, string>;
export type Errors = Partial<Record<Field, string>>;
export const choices = {
  kind: ["Roofing", "HVAC", "Plumbing", "Other"],
  source: ["Phone", "Website", "Google", "Social", "Other"],
  followup: ["We follow up manually", "Automated follow-up", "Depends", "Honestly, not sure"],
};
export function fieldError(field: Field, value: string): string | undefined {
  if (field === "name" && !value.trim()) return "Enter your name.";
  if (field === "email") {
    if (!value.trim()) return "Enter your email address.";
    if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value.trim())) return "Enter an email address like name@example.com.";
  }
  if (value.length > (field === "email" ? 254 : 300)) return "Keep this answer under 300 characters.";
  if (/[\r\n\x00]/.test(value)) return "Enter this answer on one line.";
  if (field in choices && !choices[field as keyof typeof choices].includes(value)) {
    return field === "kind" ? "Choose your business type." : field === "source" ? "Choose where most inquiries come from." : "Choose what happens after someone doesn’t book.";
  }
}
export function setupMessage(values: Values) {
  return (Object.keys(labels) as Field[]).map(field => `${labels[field]}: ${values[field].trim() || "Not provided"}`).join("\n");
}
