"use client";

import { usePathname } from "next/navigation";
import { strengthStats, text } from "@/lib/site-content";

export default function StatsBanner() {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";

  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(200,150,62,0.25) 0 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 0 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-px overflow-hidden rounded border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {strengthStats.map((stat) => (
            <div key={stat.value} className="bg-primary/70 p-7 text-center">
              <div className="font-serif text-4xl font-bold text-accent-light sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-3 text-sm text-white/65">{text(stat.label, currentLocale)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
