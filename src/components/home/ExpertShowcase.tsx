"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiArrowRight } from "react-icons/hi2";
import SectionTitle from "@/components/shared/SectionTitle";
import ExpertPortrait from "@/components/shared/ExpertPortrait";
import { expertGroups, text } from "@/lib/site-content";

export default function ExpertShowcase() {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";
  const coreExperts = [...expertGroups.advisors, ...expertGroups.chiefScientists];
  const localePath = (p: string) => {
    const suffix = p === "/" ? "" : p;
    return `/${currentLocale}${suffix}`;
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={currentLocale === "zh" ? "高级顾问与首席科学家" : "Senior Advisor and Chief Scientist"}
          subtitle={
            currentLocale === "zh"
              ? "管理、产业资源、科研能力与国家级学术渊源共同构成研究院的核心可信度。"
              : "Management capability, industry resources, research depth and national-level academic lineage form the institute's credibility."
          }
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {coreExperts.map((expert) => (
            <article
              key={expert.name}
              className="grid overflow-hidden rounded bg-bg-light shadow-sm md:grid-cols-[220px_1fr]"
            >
              <div className="flex min-h-[260px] items-center justify-center bg-primary/5 p-6">
                <ExpertPortrait
                  src={expert.image}
                  alt={expert.name}
                  className="bg-white"
                  width={160}
                  height={210}
                />
              </div>
              <div className="p-7">
                <div className="mb-4 inline-flex border-l-2 border-accent bg-white px-3 py-1 text-xs font-semibold text-accent">
                  {text(expert.role, currentLocale)}
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary">{expert.name}</h3>
                <p className="mt-4 text-sm leading-7 text-text-secondary">
                  {text(expert.desc, currentLocale)}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(currentLocale === "en" ? expert.highlights.en : expert.highlights.zh).map((item) => (
                    <span key={item} className="rounded bg-white px-3 py-1 text-xs font-medium text-primary">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={localePath("/about/team")}
            className="inline-flex items-center gap-2 rounded bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            {currentLocale === "zh" ? "进入专家库" : "View Expert Pool"}
            <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
