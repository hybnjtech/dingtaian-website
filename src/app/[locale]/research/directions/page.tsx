import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { researchDirections, text } from "@/lib/site-content";

type Props = { params: Promise<{ locale: string }> };

export default async function ResearchDirectionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("research");
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        title={t("directions_title")}
        subtitle={isEn ? "DAS, directional drilling, 3D seismic and verification systems" : "DAS、定向钻、三维地震与治理效果评价体系"}
        image="/images/site/geophysical-3d-interpretation.webp"
      />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: t("title") },
          { label: t("directions_title") },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {researchDirections.map((direction, index) => (
              <article
                key={direction.title.zh}
                className={`grid overflow-hidden rounded border border-gray-100 bg-bg-light shadow-sm lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[320px]">
                  <Image
                    src={direction.image}
                    alt={text(direction.title, locale)}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <div className="mb-4 font-serif text-4xl font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 className="font-serif text-3xl font-bold leading-tight text-primary">
                    {text(direction.title, locale)}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-text-secondary">
                    {text(direction.desc, locale)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
