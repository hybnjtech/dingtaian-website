import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ExpertPortrait from "@/components/shared/ExpertPortrait";
import ExpertApplicationForm from "@/components/shared/ExpertApplicationForm";
import { chiefEngineerHome, expertGroups, text } from "@/lib/site-content";

type Props = { params: Promise<{ locale: string }> };

export default async function AcademicPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        title={isEn ? "Academic Committee" : "学术委员会"}
        subtitle={isEn ? "Academic leadership, expert review and chief engineer community" : "学术引领、专家把关、总工交流与项目复盘"}
        image="/images/site/geophysical-3d-interpretation.webp"
      />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: isEn ? "Academic Committee" : "学术委员会" },
        ]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {isEn ? "Academic Governance" : "学术治理体系"}
              </div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl">
                {isEn
                  ? "Build a rigorous advisory system around real mine problems"
                  : "围绕真实矿井问题建设严谨的学术与技术把关体系"}
              </h2>
              <p className="mt-6 text-base leading-8 text-text-secondary">
                {isEn
                  ? "The institute connects academic advisors, university research center experts and mine chief engineers to create a closed loop of research direction, scheme review, project verification and safety training."
                  : "研究院拟以高级顾问、矿井水害防治科研专家库、煤矿总工程技术交流之家为支撑，形成科研方向把关、方案论证、项目验收、案例复盘与人才培训的闭环机制。"}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { zh: "方向把关", en: "Direction" },
                { zh: "方案论证", en: "Review" },
                { zh: "效果验收", en: "Verification" },
                { zh: "专家会诊", en: "Consultation" },
                { zh: "案例复盘", en: "Case Review" },
                { zh: "总工培训", en: "Training" },
              ].map((item, index) => (
                <div key={item.zh} className="border border-gray-100 bg-bg-light p-5 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded bg-primary font-serif text-lg font-bold text-accent-light">
                    {index + 1}
                  </div>
                  <div className="text-sm font-semibold text-primary">{isEn ? item.en : item.zh}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-3xl font-bold text-primary">
            {isEn ? "Senior Advisory Board" : "高级顾问力量"}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {expertGroups.advisors.map((expert) => (
              <article key={expert.name} className="flex gap-6 rounded border border-gray-100 bg-white p-6 shadow-sm">
                <ExpertPortrait src={expert.image} alt={expert.name} width={112} height={144} />
                <div>
                  <div className="text-xs font-semibold text-accent">{text(expert.role, locale)}</div>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-primary">{expert.name}</h3>
                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-text-secondary">
                    {text(expert.academicDesc, locale)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-3xl font-bold text-primary">
            {isEn ? "Chief Scientist and Expert Pool" : "首席科学家与研究院专家库"}
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {[...expertGroups.chiefScientists, ...expertGroups.pool].map((expert) => (
              <article key={expert.name} className="flex gap-6 rounded border border-gray-100 bg-bg-light p-6 shadow-sm">
                <ExpertPortrait src={expert.image} alt={expert.name} width={112} height={144} />
                <div>
                  <div className="text-xs font-semibold text-accent">{text(expert.credential, locale)}</div>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-primary">{expert.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{text(expert.desc, locale)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="join-expert-pool" className="bg-bg-light py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Expert Pool Application
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary">
              {isEn ? "Apply to Join the Expert Pool" : "申请加入研究院专家库"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary">
              {isEn
                ? "Submit professional information for future expert pool review."
                : "面向矿山防治水、地质工程、物探、定向钻、监测预警、矿山安全等方向开放专家库入库申请。"}
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-sm sm:p-8">
            <ExpertApplicationForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden rounded bg-primary">
              <Image
                src={chiefEngineerHome.image}
                alt={text(chiefEngineerHome.title, locale)}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/82 to-transparent" />
            </div>
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {isEn ? "Chief Engineer Community" : "煤矿总工程技术交流之家"}
              </div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl">
                {text(chiefEngineerHome.title, locale)}
              </h2>
              <p className="mt-6 text-base leading-8 text-text-secondary">
                {text(chiefEngineerHome.desc, locale)}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {(isEn
                  ? chiefEngineerHome.items.map((item) => item.en)
                  : chiefEngineerHome.items.map((item) => item.zh)
                ).map((item) => (
                  <div key={item} className="border border-gray-100 bg-bg-light px-4 py-3 text-sm font-medium text-primary">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
