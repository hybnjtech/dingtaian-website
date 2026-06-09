"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiArrowRight, HiUserGroup } from "react-icons/hi2";
import { chiefEngineerHome, text } from "@/lib/site-content";

export default function ChiefEngineerExchange() {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";
  const localePath = (p: string) => {
    const suffix = p === "/" ? "" : p;
    return `/${currentLocale}${suffix}`;
  };

  return (
    <section className="bg-bg-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[460px] overflow-hidden rounded bg-primary shadow-xl">
            <Image
              src={chiefEngineerHome.image}
              alt={text(chiefEngineerHome.title, currentLocale)}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/84 via-primary/12 to-transparent" />
            <div className="absolute left-6 top-6 border border-white/18 bg-primary/65 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
              {currentLocale === "zh" ? "首批规划 200 个矿井总工程师席位" : "First phase: 200 chief engineer seats"}
            </div>
          </div>

          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <HiUserGroup className="h-5 w-5" />
              {currentLocale === "zh" ? "高端技术共同体" : "Elite Technical Community"}
            </div>
            <h2 className="font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl">
              {text(chiefEngineerHome.title, currentLocale)}
            </h2>
            <p className="mt-6 text-base leading-8 text-text-secondary">
              {text(chiefEngineerHome.desc, currentLocale)}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {(currentLocale === "en"
                ? chiefEngineerHome.items.map((item) => item.en)
                : chiefEngineerHome.items.map((item) => item.zh)
              ).map((item) => (
                <div key={item} className="border border-gray-100 bg-white px-4 py-3 text-sm font-medium text-primary">
                  {item}
                </div>
              ))}
            </div>

            <Link
              href={localePath("/academic")}
              className="mt-8 inline-flex items-center gap-2 rounded bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              {currentLocale === "zh" ? "查看交流体系" : "View Exchange System"}
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
