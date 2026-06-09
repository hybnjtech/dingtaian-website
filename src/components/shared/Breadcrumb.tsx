"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";
  const localePath = (p: string) => {
    const suffix = p === "/" ? "" : p;
    return `/${currentLocale}${suffix}`;
  };

  return (
    <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <ol className="flex items-center gap-1.5 text-sm text-text-secondary">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-text-light">/</span>}
            {item.href ? (
              <Link
                href={localePath(item.href)}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-primary font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
