export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-3 h-0.5 w-16 rounded ${
          centered ? "mx-auto" : ""
        } bg-accent`}
      />
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-text-secondary"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
