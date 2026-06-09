"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { heroExpertShowcase, heroSlides, text } from "@/lib/site-content";

export default function HeroCarousel() {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";
  const localePath = (p: string) => {
    const suffix = p === "/" ? "" : p;
    return `/${currentLocale}${suffix}`;
  };

  const [current, setCurrent] = useState(0);
  const slideCount = heroSlides.length;
  const slide = heroSlides[current];
  const showcaseExperts = [...heroExpertShowcase, ...heroExpertShowcase];

  const next = useCallback(
    () => setCurrent((value) => (value + 1) % slideCount),
    [slideCount]
  );

  useEffect(() => {
    const timer = window.setInterval(next, 6500);
    return () => window.clearInterval(timer);
  }, [next]);

  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-primary text-white sm:min-h-[820px]">
      {heroSlides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(6, 20, 43, 0.92) 0%, rgba(6, 20, 43, 0.78) 42%, rgba(6, 20, 43, 0.25) 100%), url(${item.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          aria-hidden={index !== current}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl flex-col justify-center px-4 pb-20 pt-24 sm:min-h-[820px] sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 border-l-2 border-accent bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-light backdrop-blur">
            <span>{text(slide.kicker, currentLocale)}</span>
          </div>
          <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {text(slide.title, currentLocale)}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-xl">
            {text(slide.subtitle, currentLocale)}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={localePath("/services/engineering")}
              className="inline-flex items-center justify-center rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              {currentLocale === "zh" ? "查看技术服务" : "Technical Services"}
            </Link>
            <Link
              href={localePath("/about/team")}
              className="inline-flex items-center justify-center rounded border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {currentLocale === "zh" ? "专家团队" : "Expert Team"}
            </Link>
          </div>
        </div>

        <div className="mt-4 max-w-6xl overflow-hidden rounded border border-white/12 bg-primary/62 shadow-2xl shadow-black/25 backdrop-blur-md">
          <div className="flex flex-col gap-2 border-b border-white/10 px-4 py-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-light">
                {currentLocale === "zh" ? "顶尖专家矩阵" : "Expert Leadership Matrix"}
              </div>
              <div className="mt-1 text-sm text-white/68">
                {currentLocale === "zh"
                  ? "高级顾问、首席科学家与研究院专家库协同支撑"
                  : "Senior advisors, chief scientist and expert pool"}
              </div>
            </div>
            <Link
              href={localePath("/about/team")}
              className="text-xs font-semibold text-white/76 transition-colors hover:text-accent-light"
            >
              {currentLocale === "zh" ? "查看完整专家库" : "View full team"}
            </Link>
          </div>

          <div className="hero-expert-rail py-3">
            <div className="hero-expert-track flex w-max gap-3 px-4">
              {showcaseExperts.map((expert, index) => (
                <div
                  key={`${expert.name}-${index}`}
                  className="flex h-20 w-[220px] shrink-0 items-center gap-3 rounded bg-white/[0.08] px-3 py-3 ring-1 ring-white/10"
                  aria-hidden={index >= heroExpertShowcase.length}
                >
                  <div className="relative h-14 w-12 shrink-0 overflow-hidden rounded bg-white/10">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      sizes="48px"
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-serif text-base font-bold text-white">
                      {expert.name}
                    </div>
                    <div className="mt-1 truncate text-[10px] font-semibold text-accent-light">
                      {text(expert.credential, currentLocale)}
                    </div>
                    <div className="mt-1 truncate text-[10px] text-white/60">
                      {text(expert.role, currentLocale)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setCurrent((value) => (value - 1 + slideCount) % slideCount)}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/12 p-3 text-white backdrop-blur transition-colors hover:bg-white/20 sm:block"
        aria-label={currentLocale === "zh" ? "上一张" : "Previous slide"}
      >
        <HiChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/12 p-3 text-white backdrop-blur transition-colors hover:bg-white/20 sm:block"
        aria-label={currentLocale === "zh" ? "下一张" : "Next slide"}
      >
        <HiChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-9 bg-accent" : "w-2 bg-white/45 hover:bg-white/70"
            }`}
            aria-label={`${currentLocale === "zh" ? "切换到第" : "Go to slide"} ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
