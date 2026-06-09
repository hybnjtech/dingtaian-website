"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiArrowRight, HiCheckBadge } from "react-icons/hi2";
import { serviceChain, text } from "@/lib/site-content";

export default function AboutSummary() {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";
  const localePath = (p: string) => {
    const suffix = p === "/" ? "" : p;
    return `/${currentLocale}${suffix}`;
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <HiCheckBadge className="h-5 w-5" />
              {currentLocale === "zh" ? "研究院定位" : "Institute Positioning"}
            </div>
            <h2 className="font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl">
              {currentLocale === "zh"
                ? "以科研深度、现场经验和工程组织能力服务矿山安全"
                : "Research depth, field experience and engineering organization for mine safety"}
            </h2>
            <p className="mt-6 text-base leading-8 text-text-secondary">
              {currentLocale === "zh"
                ? "北京鼎泰安采矿山水害防治研究院面向深部开采条件下高承压水、复杂构造、强采动叠加风险，整合DAS波场监测、地球物理反演、地面定向钻探和现场项目经验，形成面向矿方决策、施工组织和验收评价的一体化科研服务体系。"
                : "Dingtai Ancai integrates mine water hazard research resources, senior industry advisors and field project experience into a decision-ready service system."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={localePath("/about/overview")}
                className="inline-flex items-center gap-2 rounded bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                {currentLocale === "zh" ? "了解研究院" : "About the Institute"}
                <HiArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={localePath("/research/directions")}
                className="inline-flex items-center gap-2 rounded border border-gray-200 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-bg-light"
              >
                {currentLocale === "zh" ? "研究方向" : "Research Directions"}
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded bg-primary shadow-2xl">
            <Image
              src="/images/site/geophysical-3d-interpretation.webp"
              alt={currentLocale === "zh" ? "矿井水害三维地质解释" : "3D geological interpretation for mine water hazards"}
              width={1200}
              height={675}
              className="h-full min-h-[360px] w-full object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/88 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {serviceChain.map((item, index) => (
                  <div key={item.title.zh} className="border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-light">
                      <span className="font-serif text-xl">{index + 1}</span>
                      <span>{text(item.title, currentLocale)}</span>
                    </div>
                    <p className="text-xs leading-5 text-white/72">
                      {text(item.desc, currentLocale)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
