export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand${compact ? " brand-compact" : ""}`}>
      <svg viewBox="0 0 80 60" width="42" height="32" aria-hidden="true">
        <path
          d="M6 41 Q40 24 74 41"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <rect x="27" y="18" width="5" height="23" />
        <rect x="48" y="18" width="5" height="23" />
      </svg>
      <span>TAJO</span>
    </span>
  );
}
