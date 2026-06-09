import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { text, type FrontierReference } from "@/lib/site-content";

type Props = {
  references: FrontierReference[];
  locale: string;
  compact?: boolean;
};

export default function FrontierReferences({ references, locale, compact = false }: Props) {
  if (references.length === 0) return null;

  return (
    <div className={`mt-5 border-t border-primary/10 pt-4 ${compact ? "space-y-2" : "space-y-3"}`}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
        {locale === "en" ? "Reference Scan" : "国际前沿参考"}
      </div>
      <div className="flex flex-wrap gap-2">
        {references.map((reference) => (
          <a
            key={reference.href}
            href={reference.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex max-w-full items-center gap-1 rounded border border-primary/10 bg-white px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <span className="truncate">{text(reference.label, locale)}</span>
            <HiArrowTopRightOnSquare className="h-3.5 w-3.5 shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
}
