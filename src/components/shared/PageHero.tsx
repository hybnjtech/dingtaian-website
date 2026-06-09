export default function PageHero({
  title,
  subtitle,
  bgClass,
  image,
}: {
  title: string;
  subtitle?: string;
  bgClass?: string;
  image?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden py-24 sm:py-32 ${bgClass || "bg-primary"}`}
    >
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/72 to-primary/42" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/18 to-transparent" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/60">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
