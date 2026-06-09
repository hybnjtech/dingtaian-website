import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";
import FrontierReferences from "@/components/shared/FrontierReferences";
import { newsFrontiers, text } from "@/lib/site-content";

type Props = { params: Promise<{ locale: string }> };

export default async function IndustryNewsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("news");
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        title={t("industry_title")}
        subtitle={isEn ? "Global technology radar for mine water hazard prevention" : "面向矿井水害防治的全球科技前沿雷达"}
        image="/images/site/das-monitoring-command.webp"
      />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: t("title"), href: "/news" },
          { label: t("industry_title") },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="relative min-h-[360px] overflow-hidden rounded bg-primary">
              <Image
                src="/images/site/field-directional-drilling-rig.webp"
                alt={isEn ? "Directional drilling construction" : "地面定向钻施工"}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/88 to-transparent" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-primary">
                {isEn
                  ? "From frontier technologies to deployable mine solutions"
                  : "从前沿技术趋势到矿井现场可落地方案"}
              </h2>
              <p className="mt-5 text-base leading-8 text-text-secondary">
                {isEn
                  ? "The institute tracks technologies with practical relevance to mine water prevention, including directional drilling, DAS, 3D seismic, electrical methods, numerical simulation and AI-assisted warning."
                  : "研究院持续跟踪与矿井防治水直接相关的技术趋势，包括地面定向多分支井、DAS 分布式光纤监测、三维地震、矿井电法、数值模拟和智能预警等方向，并将其转化为矿方可执行的技术路线。"}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {newsFrontiers.map((item) => (
              <article key={item.title.zh} className="rounded border border-gray-100 bg-bg-light p-7">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {item.source}
                </div>
                <h3 className="font-serif text-xl font-semibold leading-8 text-primary">
                  {text(item.title, locale)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {text(item.desc, locale)}
                </p>
                <FrontierReferences references={item.references} locale={locale} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
