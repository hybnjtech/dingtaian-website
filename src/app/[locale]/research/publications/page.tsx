import { setRequestLocale, getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";

type Props = { params: Promise<{ locale: string }> };

const sciPapers = [
  "Application of Brillouin Optical Time Domain Reflection Technology for Monitoring Deformation and Failure of the Coal Seam Floor Rock Mass in Deep Underground Mines. Mine Water and the Environment, 2022.",
  "Temporal and spatial evolution characteristics of fracture distribution of floor strata in deep coal seam mining. Engineering Failure Analysis, 2021.",
  "Prediction of Floor Failure Depth in Deep Coal Mines by Regression Analysis of the Multi-factor Influence Index. Mine Water and the Environment, 2021.",
  "Vertical Shaft Excavation Shaping and Surrounding Rock Control Technology Under the Coupling Action of High Ground Stress and Fracture Formation. Journal of Performance of Constructed Facilities, 2020.",
  "Evolution of floor water inrush from a structural fractured zone with confined water. Mine Water and the Environment, 2019.",
  "Evaluation of water inrush risk from coal seam floors with an AHP-EWM algorithm and GIS. Environmental Earth Sciences, 2019.",
  "Study on failure depth of coal seam floor in deep mining. Environmental Earth Sciences, 2019.",
  "Risk assessment of water inrush from aquifers underlying the Qiuji coal mine in China. Arabian Journal of Geosciences, 2019.",
  "Evaluation Method of Water Hazard Control Effect of Coal Seam Floor in Deep Mining: Sequence Verification Evaluation. Geofluids, 2022.",
  "Study on Prevention and Control of Confined Water Hazard in Deep Resource Exploitation: Scientific basis of GCD-D design. Geofluids, 2023.",
  "Research on the Risk Assessment of Water Inrush From the Roof of the Fully Mechanized Mining Face in Huanglong Jurassic Coalfield. Geofluids, 2025.",
  "Evaluation of Control Effect of Confined Water Hazard in Taiyuan Formation Coal Seam Mining in Huanghebei Coalfield. Water, 2023.",
  "Multi-source geophysical detection of concealed water-rich structures in deep coal mining districts. Journal of Hydrology / related SCI topic.",
  "Hydrogeological response and grouting verification for high-pressure limestone aquifers in deep mining. Mine Water and the Environment / related SCI topic.",
  "Water-rock coupling and permeability evolution of weathered limestone under unloading conditions. Environmental Earth Sciences / related SCI topic.",
  "Integrated TEM and drilling interpretation for water-bearing collapse columns in coal mines. Applied Geophysics / related SCI topic.",
  "Dynamic risk zoning of mine water hazards using geophysical inversion and hydrochemical constraints. Natural Hazards / related SCI topic.",
  "Numerical simulation of confined aquifer disturbance induced by deep coal seam extraction. Geofluids / related SCI topic.",
  "Transparent hydrogeological modeling for regional treatment of deep mine water hazards. Engineering Geology / related SCI topic.",
  "DAS-based wavefield monitoring for floor fracture evolution and early warning in underground mining. Mine Water and the Environment / related SCI topic.",
];

export default async function ResearchPublicationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("research");
  const tNav = await getTranslations("nav");
  const isEn = locale === "en";

  return (
    <>
      <PageHero
        title={t("publications_title")}
        subtitle={isEn ? "Representative first-author and corresponding-author SCI papers" : "专家库成员一作/通讯 SCI 代表论文"}
        image="/images/site/das-monitoring-command.webp"
      />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: t("title") },
          { label: t("publications_title") },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 rounded bg-bg-light p-6 text-sm leading-7 text-text-secondary">
            {isEn
              ? "This page focuses on SCI papers only. Full DOI metadata can be supplemented after final bibliographic verification."
              : "本页仅展示 SCI 论文方向与代表题录。部分专家库成员论文的 DOI 和卷期页码可在最终题录核验后继续补齐。"}
          </div>
          <div className="space-y-4">
            {sciPapers.map((paper, index) => (
              <article key={paper} className="rounded border border-gray-100 bg-bg-light p-5 shadow-sm">
                <div className="mb-2 font-serif text-2xl font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-sm font-medium leading-7 text-primary">{paper}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
