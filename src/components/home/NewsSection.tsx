"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiArrowRight, HiSignal } from "react-icons/hi2";
import SectionTitle from "@/components/shared/SectionTitle";
import FrontierReferences from "@/components/shared/FrontierReferences";
import { newsFrontiers, text } from "@/lib/site-content";

export default function NewsSection() {
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
          title={currentLocale === "zh" ? "世界科技前沿观察" : "Global Technology Frontiers"}
          subtitle={
            currentLocale === "zh"
              ? "持续跟踪定向钻、DAS 监测、三维地震、矿井电法与智能预警技术，把国际前沿转化为矿山防治水现场方案。"
              : "Tracking directional drilling, DAS, 3D seismic, mine geophysics and intelligent warning worldwide."
          }
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative min-h-[420px] overflow-hidden rounded bg-primary">
            <Image
              src="/images/site/das-monitoring-command.webp"
              alt={currentLocale === "zh" ? "DAS 矿井水害监测指挥中心" : "DAS monitoring command center"}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 p-7">
              <div className="mb-3 inline-flex items-center gap-2 bg-white/12 px-3 py-1 text-xs font-semibold text-accent-light backdrop-blur">
                <HiSignal className="h-4 w-4" />
                {currentLocale === "zh" ? "前沿技术雷达" : "Technology Radar"}
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {currentLocale === "zh"
                  ? "从全球技术趋势中筛选可落地的矿井防治水工具"
                  : "Selecting deployable mine water-control tools from global trends"}
              </h3>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {newsFrontiers.map((item) => (
              <article key={item.title.zh} className="rounded border border-gray-100 bg-bg-light p-6">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {item.source}
                </div>
                <h3 className="font-serif text-lg font-semibold leading-7 text-primary">
                  {text(item.title, currentLocale)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {text(item.desc, currentLocale)}
                </p>
                <FrontierReferences references={item.references} locale={currentLocale} compact />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href={localePath("/news/industry")}
            className="inline-flex items-center gap-2 rounded border border-primary/20 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {currentLocale === "zh" ? "进入行业资讯" : "Industry Insights"}
            <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
