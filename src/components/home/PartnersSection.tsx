"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import SectionTitle from "@/components/shared/SectionTitle";

const partners = [
  "矿井水害防治与水资源利用\n科研平台",
  "中国矿业大学\n资源与地球科学学院",
  "中国矿业大学（北京）\n地球科学与测绘工程学院",
  "国家煤矿水害防治工程技术研究中心",
  "国际矿山水协会\nIMWA 中国国家委员会",
  "深部采动国家重点实验室",
  "中国煤炭科学研究总院\n专家库",
  "山东省重点研发计划\n评审专家库",
];

const partnersEn = [
  "Mine Water Hazard Prevention Research Platform",
  "China University of Mining and Technology",
  "China University of Mining & Technology (Beijing)",
  "National Engineering Research Center for Coal Mine Water Hazard Prevention",
  "IMWA China National Committee",
  "State Key Laboratory of Deep Mining Response and Disaster Prevention",
  "China Coal Research Institute Expert Pool",
  "Shandong Key R&D Program Expert Pool",
];

export default function PartnersSection() {
  const t = useTranslations("home.partners");
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";

  const items = currentLocale === "zh" ? partners : partnersEn;

  return (
    <section className="py-20 sm:py-28 bg-bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-lg bg-white p-6 text-center shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-primary/10"
            >
              <span className="text-xs font-medium text-text-secondary whitespace-pre-line leading-relaxed">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
