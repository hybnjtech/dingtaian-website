import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";

type Props = { params: Promise<{ locale: string }> };

const researchCapabilities = [
  {
    title: { zh: "DAS 波场监测与智能预警", en: "DAS Wavefield Monitoring" },
    desc: {
      zh: "利用分布式光纤声波传感连续获取采动响应、裂隙扩展和异常扰动信号，服务底板破坏与突水前兆识别。",
      en: "Continuous distributed acoustic sensing for mining response, fracture evolution and early water-inrush signals.",
    },
    image: "/images/site/das-monitoring-command.webp",
  },
  {
    title: { zh: "三维地震、矿井电法与多源反演", en: "3D Seismic, Mine Geophysics and Inversion" },
    desc: {
      zh: "融合三维地震、瞬变电磁、直流电法、钻孔揭露和水文响应，反演隐蔽导水通道与富水异常边界。",
      en: "Joint inversion of 3D seismic, TEM, electrical methods, borehole exposure and hydrological response.",
    },
    image: "/images/site/geophysical-3d-interpretation.webp",
  },
  {
    title: { zh: "地面定向多分支井与区域治理", en: "Surface Directional Multilateral Drilling" },
    desc: {
      zh: "通过长距离轨迹控制和靶向钻进，精准进入灰岩含水层、断层带和富水异常体，支撑区域注浆改造和效果检验。",
      en: "Long-reach trajectory control and targeted drilling for aquifers, faults and anomalies.",
    },
    image: "/images/site/field-directional-drilling-rig.webp",
  },
];

const text = (value: { zh: string; en: string }, locale: string) =>
  locale === "en" ? value.en : value.zh;

export default async function AboutOverviewPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        title={t("overview_title")}
        subtitle={
          isEn
            ? "Scientific research, field verification and engineering translation"
            : "科学研究、现场验证与工程转化一体化"
        }
        image="/images/site/geophysical-3d-interpretation.webp"
      />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: tNav("about"), href: "/about" },
          { label: t("overview_title") },
        ]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {isEn ? "Institute Profile" : "研究院定位"}
              </div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl">
                {isEn
                  ? "A research institute for deep mine water hazards and transparent hydrogeology"
                  : "面向深部矿山水害与透明水文地质的科研型研究院"}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-text-secondary">
                {t("overview_content")
                  .split("\n\n")
                  .map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative min-h-[320px] overflow-hidden rounded bg-primary shadow-xl">
                <Image
                  src="/images/site/das-monitoring-command.webp"
                  alt={isEn ? "DAS monitoring command center" : "DAS 波场监测与智能预警"}
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-light">
                    DAS · Geophysics · Inversion
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                    {isEn ? "From field signals to verifiable treatment decisions" : "从现场信号到可验证治理决策"}
                  </h3>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative min-h-[180px] overflow-hidden rounded bg-primary">
                  <Image
                    src="/images/site/field-directional-drilling-rig.webp"
                    alt={isEn ? "Surface directional drilling rig" : "地面定向多分支井施工现场"}
                    fill
                    sizes="(min-width: 640px) 26vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative min-h-[180px] overflow-hidden rounded bg-primary">
                  <Image
                    src="/images/site/geophysical-3d-interpretation.webp"
                    alt={isEn ? "3D geophysical interpretation" : "三维地震与矿井电法综合解释"}
                    fill
                    sizes="(min-width: 640px) 26vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {researchCapabilities.map((item) => (
              <article key={item.title.zh} className="overflow-hidden rounded border border-gray-100 bg-bg-light shadow-sm">
                <div className="relative min-h-[220px]">
                  <Image
                    src={item.image}
                    alt={text(item.title, locale)}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary">{text(item.title, locale)}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{text(item.desc, locale)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
