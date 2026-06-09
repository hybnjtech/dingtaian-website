import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";

type Props = { params: Promise<{ locale: string }> };

const engineeringItems = [
  { zh: "地面定向多分支井区域治理", en: "Surface directional multilateral regional treatment", descZh: "以长距离定向钻进构建注浆改造与效果验证通道。", descEn: "Long-reach directional drilling channels for grouting and verification.", image: "/images/site/service-engineering-multilateral-drilling.webp" },
  { zh: "底板注浆改造工程", en: "Floor grouting reinforcement", descZh: "面向高承压含水层和破碎带开展参数优化与施工组织咨询。", descEn: "Parameter optimization and construction consulting for high-pressure aquifers.", image: "/images/site/service-engineering-grouting.webp" },
  { zh: "疏水降压与水文响应控制", en: "Dewatering and hydrological response control", descZh: "构建疏放水、降压、涌水响应和采掘接续协同方案。", descEn: "Coordinate dewatering, pressure reduction, inflow response and mining sequence.", image: "/images/site/service-engineering-dewatering.webp" },
  { zh: "帷幕截流与区域隔水体系", en: "Curtain interception and regional isolation", descZh: "服务矿区边界控水、富水通道封堵和治理效果验收。", descEn: "Boundary water control, pathway sealing and treatment acceptance.", image: "/images/site/service-engineering-curtain-isolation.webp" },
  { zh: "井下探放水工程优化", en: "Underground exploration and drainage optimization", descZh: "优化探放水布孔、施工安全边界和异常响应处置流程。", descEn: "Optimize borehole layout, construction safety boundary and abnormal response workflow.", image: "/images/site/service-engineering-underground-drainage.webp" },
  { zh: "治理效果检验与验收评价", en: "Treatment verification and acceptance", descZh: "以钻探、物探、DAS、涌水量和水化学构建多源证据链。", descEn: "Build evidence chains using drilling, geophysics, DAS, inflow and hydrochemistry.", image: "/images/site/service-engineering-acceptance.webp" },
];

export default async function ServicesEngineeringPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        title={t("engineering_title")}
        subtitle={isEn ? "Field engineering with measurable treatment effectiveness" : "面向现场实效的矿山水害防治工程"}
        image="/images/site/field-directional-drilling-rig.webp"
      />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: t("title") },
          { label: t("engineering_title") },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-12 max-w-4xl text-lg leading-8 text-text-secondary">{t("engineering_desc")}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engineeringItems.map((item) => (
              <article key={item.zh} className="overflow-hidden rounded border border-gray-100 bg-bg-light shadow-sm">
                <div className="relative min-h-[230px]">
                  <Image
                    src={item.image}
                    alt={isEn ? item.en : item.zh}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl font-bold leading-7 text-primary">{isEn ? item.en : item.zh}</h2>
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
