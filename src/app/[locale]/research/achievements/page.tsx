import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { representativeProjects, text } from "@/lib/site-content";

type Props = { params: Promise<{ locale: string }> };

const achievements = [
  {
    value: "300+",
    zh: "矿井水害防治项目",
    en: "Mine water hazard projects",
  },
  {
    value: "120+",
    zh: "SCI 论文",
    en: "SCI papers",
  },
  {
    value: "20+",
    zh: "授权发明",
    en: "Granted inventions",
  },
  {
    value: "5+",
    zh: "矿井水害防治专著",
    en: "Monographs",
  },
];

export default async function ResearchAchievementsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("research");
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        title={t("achievements_title")}
        subtitle={isEn ? "Projects, papers, patents and verification methods" : "项目、论文、专利、专著与治理效果评价方法"}
        image="/images/site/geophysical-3d-interpretation.webp"
      />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: t("title") },
          { label: t("achievements_title") },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded border border-gray-100 bg-gray-100 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => (
              <div key={item.zh} className="bg-bg-light p-7 text-center">
                <div className="font-serif text-4xl font-bold text-accent">{item.value}</div>
                <div className="mt-3 text-sm text-text-secondary">{isEn ? item.en : item.zh}</div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h2 className="mb-8 font-serif text-3xl font-bold text-primary">
              {isEn ? "Representative Technical Achievements" : "代表性技术成果与项目支撑"}
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {representativeProjects.map((project) => (
                <article key={project.title.zh} className="overflow-hidden rounded border border-gray-100 bg-bg-light shadow-sm">
                  <div className="relative min-h-[240px]">
                    <Image
                      src={project.image}
                      alt={text(project.title, locale)}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <div className="mb-4 inline-flex rounded bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {text(project.tag, locale)}
                    </div>
                    <h3 className="font-serif text-xl font-semibold leading-8 text-primary">
                      {text(project.title, locale)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-text-secondary">
                      {text(project.desc, locale)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
