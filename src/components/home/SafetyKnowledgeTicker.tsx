"use client";

import { usePathname } from "next/navigation";
import { HiBookOpen } from "react-icons/hi2";
import { safetyLessons, text } from "@/lib/site-content";

export default function SafetyKnowledgeTicker() {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";
  const items = [...safetyLessons, ...safetyLessons];

  return (
    <section className="overflow-hidden bg-primary py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-light">
              <HiBookOpen className="h-5 w-5" />
              {currentLocale === "zh" ? "矿山安全知识滚动学习" : "Mine Safety Learning Stream"}
            </div>
            <h2 className="font-serif text-3xl font-bold">
              {currentLocale === "zh" ? "把防治水经验转化为每天可学习的安全知识" : "Turning water-control experience into daily safety learning"}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/62">
            {currentLocale === "zh"
              ? "面向矿长、总工程师、地测防治水人员和一线技术骨干，持续输出可复盘、可培训、可落地的知识卡片。"
              : "Short, reviewable learning cards for mine leaders, chief engineers and water-control teams."}
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex w-max animate-[knowledge-marquee_38s_linear_infinite] gap-4 px-4">
          {items.map((item, index) => (
            <article
              key={`${item.title.zh}-${index}`}
              className="w-[320px] shrink-0 border border-white/12 bg-white/10 p-5 backdrop-blur sm:w-[380px]"
            >
              <h3 className="font-serif text-lg font-semibold text-accent-light">
                {text(item.title, currentLocale)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                {text(item.desc, currentLocale)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
