"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiArrowRight, HiMiniCheckCircle } from "react-icons/hi2";
import SectionTitle from "@/components/shared/SectionTitle";
import { representativeProjects, text } from "@/lib/site-content";

export default function ProjectPortfolio() {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";
  const localePath = (p: string) => {
    const suffix = p === "/" ? "" : p;
    return `/${currentLocale}${suffix}`;
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={currentLocale === "zh" ? "代表性项目能力" : "Representative Project Capability"}
          subtitle={
            currentLocale === "zh"
              ? "从煤矿带压开采安全论证，到金属矿超高承压水 EPC 研究总承包，形成面向矿方真实问题的工程化交付能力。"
              : "From coal mine safety evaluation to ultra-high pressure water EPC research for metal mines."
          }
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {representativeProjects.map((project) => (
            <article key={project.title.zh} className="rounded border border-gray-100 bg-bg-light p-7">
              <div className="mb-4 inline-flex rounded bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {text(project.tag, currentLocale)}
              </div>
              <h3 className="font-serif text-xl font-semibold leading-8 text-primary">
                {text(project.title, currentLocale)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {text(project.desc, currentLocale)}
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-safety-green">
                <HiMiniCheckCircle className="h-4 w-4" />
                {currentLocale === "zh" ? "可形成风险结论、治理方案、关键参数与验收评价" : "Decision, design, parameters and verification deliverables"}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={localePath("/research/achievements")}
            className="inline-flex items-center gap-2 rounded border border-primary/20 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {currentLocale === "zh" ? "查看科研成果" : "View Achievements"}
            <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
