"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiArrowRight } from "react-icons/hi2";
import SectionTitle from "@/components/shared/SectionTitle";
import { researchDirections, text } from "@/lib/site-content";

export default function ResearchGrid() {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";
  const localePath = (p: string) => {
    const suffix = p === "/" ? "" : p;
    return `/${currentLocale}${suffix}`;
  };

  return (
    <section className="bg-bg-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={currentLocale === "zh" ? "科研与工程技术方向" : "Research and Engineering Directions"}
          subtitle={
            currentLocale === "zh"
              ? "聚焦深部开采水害防控的关键科学问题与现场工程难题，形成从探查到治理、从监测到验收的技术矩阵。"
              : "A technical matrix from exploration to treatment, monitoring and acceptance verification."
          }
        />

        <div className="grid gap-6 md:grid-cols-2">
          {researchDirections.map((direction) => (
            <article
              key={direction.title.zh}
              className="group overflow-hidden rounded border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={direction.image}
                  alt={text(direction.title, currentLocale)}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl font-semibold text-primary">
                  {text(direction.title, currentLocale)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {text(direction.desc, currentLocale)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={localePath("/research/directions")}
            className="inline-flex items-center gap-2 rounded border border-primary/20 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {currentLocale === "zh" ? "查看完整研究体系" : "View Research System"}
            <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
