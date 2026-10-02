import Icon from "./Icon";

/** The shared action treatment from the approved design. */
export default function PillAction({
  children,
  href,
  light = false,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
}) {
  const content = (
    <>
      {children}
      <span className="action-disc">
        <Icon name="arrow" />
      </span>
    </>
  );
  const className = `pill-action${light ? " pill-action-light" : ""}`;
  return href ? (
    <a className={className} href={href}>
      {content}
    </a>
  ) : (
    <button className={className} type="button" data-diagnostic>
      {content}
    </button>
  );
}
