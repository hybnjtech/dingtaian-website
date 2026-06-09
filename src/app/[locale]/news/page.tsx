import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";
import FrontierReferences from "@/components/shared/FrontierReferences";
import { newsFrontiers, text } from "@/lib/site-content";

type Props = { params: Promise<{ locale: string }> };

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("news");
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={isEn ? "Institute updates and global technology frontiers" : "研究院动态与全球科技前沿"}
        image="/images/site/das-monitoring-command.webp"
      />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: t("title") },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6">
            <Link
              href={`/${locale}/news/industry`}
              className="rounded border border-gray-100 bg-bg-light p-8 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="text-sm font-semibold text-accent">{isEn ? "Frontier" : "前沿"}</div>
              <h2 className="mt-3 font-serif text-2xl font-bold text-primary">{t("industry_title")}</h2>
              <p className="mt-4 text-sm leading-7 text-text-secondary">
                {isEn ? "Directional drilling, DAS, 3D seismic and mine electrical methods." : "定向钻、DAS、三维地震、矿井电法与智能预警前沿观察。"}
              </p>
            </Link>
          </div>

          <h2 className="mb-6 font-serif text-3xl font-bold text-primary">
            {isEn ? "Selected Frontiers" : "精选科技前沿"}
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {newsFrontiers.map((item) => (
              <article key={item.title.zh} className="rounded border border-gray-100 bg-bg-light p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {item.source}
                </div>
                <h3 className="font-serif text-lg font-semibold leading-7 text-primary">
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
