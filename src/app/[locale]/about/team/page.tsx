import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ExpertPortrait from "@/components/shared/ExpertPortrait";
import { expertGroups, text } from "@/lib/site-content";

type Props = { params: Promise<{ locale: string }> };

export default async function AboutTeamPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        title={isEn ? "Expert Team" : "专家团队"}
        subtitle={isEn ? "Senior advisor, chief scientist and expert pool" : "高级顾问、首席科学家与研究院专家库"}
        image="/images/site/chief-engineer-salon.webp"
      />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: tNav("about"), href: "/about" },
          { label: isEn ? "Expert Team" : "专家团队" },
        ]}
      />

      <section id="senior-advisors" className="bg-bg-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary">
                {isEn ? "Senior Advisors" : "高级顾问"}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-text-secondary">
                {isEn
                  ? "The senior advisor provides strategic coordination, major engineering organization and risk governance support."
                  : "高级顾问承担战略统筹、重大工程组织、产业资源协同和风险治理支撑。"}
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl">
            {expertGroups.advisors.map((expert) => (
              <article
                key={expert.name}
                className="chief-scientist-card rounded bg-white p-8 shadow-sm"
              >
                <div className="chief-scientist-card__photo">
                  <ExpertPortrait src={expert.image} alt={expert.name} className="bg-white" width={160} height={200} />
                </div>
                <div className="chief-scientist-card__body">
                  <div className="inline-flex border-l-2 border-accent bg-bg-light px-3 py-1 text-xs font-semibold text-accent">
                    {text(expert.role, locale)}
                  </div>
                  <div className="mt-3 text-xs font-semibold text-accent">
                    {text(expert.credential, locale)}
                  </div>
                  <h3 className="mt-1 font-serif text-3xl font-bold text-primary">{expert.name}</h3>
                  <p className="mt-4 max-w-2xl whitespace-pre-line text-sm leading-7 text-text-secondary">
                    {text(expert.academicDesc, locale)}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(isEn ? expert.highlights.en : expert.highlights.zh).map((item) => (
                      <span key={item} className="rounded bg-bg-light px-3 py-1 text-xs font-medium text-primary">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-primary">
              {isEn ? "Institute Chief Scientist" : "研究院首席科学家、技术顾问"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary">
              {isEn
                ? "The chief scientist leads core research directions, technical review and field verification."
                : "首席科学家承担核心科研方向、重大技术路线、现场验证和专家协同支撑。"}
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            {expertGroups.chiefScientists.map((expert) => (
              <article
                key={expert.name}
                className="chief-scientist-card rounded bg-bg-light p-8 shadow-sm"
              >
                <div className="chief-scientist-card__photo">
                  <ExpertPortrait src={expert.image} alt={expert.name} className="bg-white" width={160} height={200} />
                </div>
                <div className="chief-scientist-card__body">
                  <div className="inline-flex border-l-2 border-accent bg-white px-3 py-1 text-xs font-semibold text-accent">
                    {text(expert.role, locale)}
                  </div>
                  <div className="mt-3 text-xs font-semibold text-accent">
                    {text(expert.credential, locale)}
                  </div>
                  <h3 className="mt-1 font-serif text-3xl font-bold text-primary">{expert.name}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary">{text(expert.desc, locale)}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(isEn ? expert.highlights.en : expert.highlights.zh).map((item) => (
                      <span key={item} className="rounded bg-white px-3 py-1 text-xs font-medium text-primary">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="expert-pool" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-primary">
              {isEn ? "Expert Pool Members" : "研究院专家库成员"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary">
              {isEn
                ? "Mine water hazard prevention and water resources experts are included in the institute expert pool."
                : "矿井水害防治与水资源利用科研团队成员纳入研究院专家库，支撑项目论证、现场会诊、科研攻关与培训交流。"}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertGroups.pool.map((expert) => (
              <article key={expert.name} className="rounded border border-gray-100 bg-bg-light p-6">
                <ExpertPortrait
                  src={expert.image}
                  alt={expert.name}
                  className="mx-auto mb-5 h-40 w-32"
                  width={128}
                  height={160}
                />
                <div className="text-xs font-semibold text-accent">{text(expert.role, locale)}</div>
                <div className="mt-1 text-xs font-semibold text-accent">{text(expert.credential, locale)}</div>
                <h3 className="mt-1 font-serif text-xl font-bold text-primary">{expert.name}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{text(expert.desc, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
