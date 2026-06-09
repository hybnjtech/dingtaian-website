import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";

type Props = { params: Promise<{ locale: string }> };

const consultingItems = [
  {
    zh: "矿井水害防治技术路线论证",
    en: "Technical route review for mine water control",
    descZh: "围绕含水层、断层、陷落柱、采动扰动和治理目标，组织技术路线比选与专家论证。",
    descEn: "Review technical routes around aquifers, faults, collapse columns, mining disturbance and treatment objectives.",
    image: "/images/site/service-consulting-route-review.webp",
  },
  {
    zh: "透明水文地质模型构建",
    en: "Transparent hydrogeological model building",
    descZh: "融合钻探、三维地震、矿井电法、水化学和涌水响应，形成可解释的水害模型。",
    descEn: "Fuse drilling, 3D seismic, mine geophysics, hydrochemistry and inflow response into interpretable models.",
    image: "/images/site/service-consulting-transparent-model.webp",
  },
  {
    zh: "DAS 与多源监测系统方案",
    en: "DAS and multi-source monitoring scheme",
    descZh: "面向底板破坏、裂隙导水和突水前兆，设计 DAS 波场监测与智能预警方案。",
    descEn: "Design DAS wavefield monitoring and warning schemes for floor failure and water-inrush precursors.",
    image: "/images/site/service-consulting-das-scheme.webp",
  },
  {
    zh: "地面定向钻与区域治理设计",
    en: "Directional drilling and regional treatment design",
    descZh: "开展靶区识别、轨迹设计、注浆参数建议和施工组织咨询。",
    descEn: "Support target identification, trajectory design, grouting parameters and construction organization.",
    image: "/images/site/service-consulting-directional-design.webp",
  },
];

export default async function ServicesConsultingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        title={t("consulting_title")}
        subtitle={isEn ? "Research-grade consulting for mine water hazards" : "面向矿山水害的科研级技术咨询"}
        image="/images/site/geophysical-3d-interpretation.webp"
      />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: t("title") },
          { label: t("consulting_title") },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-12 max-w-4xl text-lg leading-8 text-text-secondary">{t("consulting_desc")}</p>
          <div className="grid gap-6 lg:grid-cols-2">
            {consultingItems.map((item) => (
              <article key={item.zh} className="overflow-hidden rounded border border-gray-100 bg-bg-light shadow-sm">
                <div className="relative min-h-[260px]">
                  <Image
                    src={item.image}
                    alt={isEn ? item.en : item.zh}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h2 className="font-serif text-2xl font-bold text-primary">{isEn ? item.en : item.zh}</h2>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{isEn ? item.descEn : item.descZh}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
