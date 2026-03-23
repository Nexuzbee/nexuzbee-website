type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="mt-4 text-base sm:text-lg">{description}</p> : null}
    </div>
  );
}
