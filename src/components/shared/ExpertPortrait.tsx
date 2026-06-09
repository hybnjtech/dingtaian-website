import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export default function ExpertPortrait({ src, alt, className = "", width, height }: Props) {
  const fixedSize = width && height ? { width: `${width}px`, height: `${height}px` } : undefined;

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded bg-bg-light ${className}`}
      style={fixedSize}
    >
      <Image
        src={src}
        alt={alt}
        width={320}
        height={400}
        loading="eager"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
