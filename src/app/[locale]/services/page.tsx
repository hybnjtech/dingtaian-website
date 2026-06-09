import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";

type Props = { params: Promise<{ locale: string }> };

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  const services = [
    {
      href: `/${locale}/services/consulting`,
      title: t("consulting_title"),
      desc: t("consulting_desc"),
      tag: isEn ? "Decision Support" : "决策支撑",
    },
    {
      href: `/${locale}/services/assessment`,
      title: t("assessment_title"),
      desc: t("assessment_desc"),
      tag: isEn ? "Risk Evaluation" : "风险评价",
    },
    {
      href: `/${locale}/services/engineering`,
      title: t("engineering_title"),
      desc: t("engineering_desc"),
      tag: isEn ? "Engineering Delivery" : "工程交付",
    },
  ];

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} image="/images/site/field-directional-drilling-rig.webp" />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: t("title") },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded border border-gray-100 bg-bg-light p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {service.tag}
                </div>
                <h2 className="font-serif text-2xl font-bold text-primary">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
