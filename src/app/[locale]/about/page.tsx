import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  const links = [
    {
      href: `/${locale}/about/overview`,
      title: t("overview_title"),
      desc: isEn ? "Institute positioning, service philosophy and development logic." : "研究院定位、服务理念与发展逻辑。",
    },
    {
      href: `/${locale}/about/team`,
      title: t("team_title"),
      desc: isEn ? "Senior advisors, chief scientist and expert pool." : "高级顾问、首席科学家与研究院专家库。",
    },
  ];

  return (
    <>
      <PageHero
        title={isEn ? "About Us" : "关于我们"}
        subtitle={isEn ? "Research-led, field-proven and globally connected" : "科研引领、现场验证、世界接轨"}
        image="/images/site/field-directional-drilling-rig.webp"
      />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: isEn ? "About Us" : "关于我们" },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary">
              {isEn ? "A specialized institute for mine water hazard prevention" : "面向矿井水害防治的专业研究院"}
            </h2>
            <p className="mt-5 text-base leading-8 text-text-secondary">
              {isEn
                ? "The institute combines mine management leadership, research resources, senior academic advisors and field engineering delivery capability."
                : "研究院整合矿业管理经验、科研资源、高级学术顾问和现场工程交付能力，服务煤矿、金属矿及复杂地下工程水害防治需求。"}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded border border-gray-100 bg-bg-light p-7 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-serif text-2xl font-bold text-primary">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
