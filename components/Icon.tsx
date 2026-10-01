export type IconName =
  | "phone"
  | "clock"
  | "person"
  | "calendar"
  | "message"
  | "check"
  | "arrow"
  | "gear"
  | "shield"
  | "close"
  | "menu";
const paths: Record<IconName, React.ReactNode> = {
  phone: <path d="M7 3 4 4c-2 5 7 14 12 14l2-3-4-3-2 2-5-5 2-2-2-4Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M5 20v-2a7 7 0 0 1 14 0v2Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4m8-4v4M4 10h16m-11 4h1m4 0h1m-6 3h1" />
    </>
  ),
  message: (
    <>
      <path d="M4 4h16v13H9l-5 4V4Z" />
      <path d="M8 8h8m-8 4h5" />
    </>
  ),
  check: <path d="m5 12 4 4 10-10" />,
  arrow: <path d="M4 12h15m-5-5 5 5-5 5" />,
  gear: (
    <>
      <path d="m9 3-1 3-3 1-2 3 2 2v3l3 1 1 3h4l1-3 3-1v-3l2-2-2-3-3-1-1-3H9Z" />
      <circle cx="11" cy="11" r="3" />
    </>
  ),
  shield: (
    <>
      <path d="m12 3 8 3v6c0 5-8 9-8 9S4 17 4 12V6l8-3Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
};
export default function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
