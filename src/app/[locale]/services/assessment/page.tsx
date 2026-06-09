import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";

type Props = { params: Promise<{ locale: string }> };

const assessmentItems = [
  { zh: "矿井突水危险性评价", en: "Water-inrush risk assessment", image: "/images/site/service-assessment-inrush-risk.webp" },
  { zh: "底板突水系数与隔水层稳定性分析", en: "Floor coefficient and aquiclude stability", image: "/images/site/service-assessment-aquiclude-stability.webp" },
  { zh: "采动底板破坏深度预测", en: "Mining-induced floor failure prediction", image: "/images/site/service-assessment-floor-failure.webp" },
  { zh: "矿井涌水量预测与水文响应评价", en: "Mine inflow prediction and hydrological response", image: "/images/site/service-assessment-inflow-response.webp" },
  { zh: "断层、陷落柱导水性评价", en: "Fault and collapse-column conductivity", image: "/images/site/service-assessment-fault-conductivity.webp" },
  { zh: "矿井充水条件三维可视化分析", en: "3D visualization of water-filling conditions", image: "/images/site/service-assessment-3d-water-model.webp" },
];

export default async function ServicesAssessmentPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        title={t("assessment_title")}
        subtitle={isEn ? "Model-constrained assessment and evidence-chain verification" : "模型约束评价与证据链验证"}
        image="/images/site/das-monitoring-command.webp"
      />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: t("title") },
          { label: t("assessment_title") },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-12 max-w-4xl text-lg leading-8 text-text-secondary">{t("assessment_desc")}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assessmentItems.map((item, index) => (
              <article key={item.zh} className="overflow-hidden rounded border border-gray-100 bg-bg-light shadow-sm">
                <div className="relative min-h-[220px]">
                  <Image
                    src={item.image}
                    alt={isEn ? item.en : item.zh}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded bg-primary/80 px-3 py-1 font-serif text-lg font-bold text-accent-light backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl font-bold leading-7 text-primary">{isEn ? item.en : item.zh}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
