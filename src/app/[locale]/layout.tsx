import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const meta = {
    zh: {
      title: "北京鼎泰安采矿山水害防治研究院 - 定向钻探 DAS监测 矿井防治水",
      description:
        "北京鼎泰安采矿山水害防治研究院，面向深部矿井高承压水、复杂构造和强采动风险，提供地面定向钻探、DAS监测预警、三维地震与矿井电法综合解释、水害评价和治理效果评价等一体化技术服务。",
      keywords:
        "矿井水害防治,煤矿防治水,地面定向钻,DAS监测,三维地震,矿井电法,水害评价,治理效果评价,矿山安全,深部开采,北京鼎泰安采",
    },
    en: {
      title: "Beijing Dingtai Ancai Mine Water Hazard Prevention Research Institute",
      description:
        "Integrated technical services for deep mine water hazards, including directional drilling, DAS monitoring, 3D seismic, mine geophysics, water hazard assessment and treatment verification.",
      keywords:
        "mine water hazard prevention, directional drilling, DAS monitoring, 3D seismic, mine electrical methods, water inrush assessment, treatment verification, mine safety, deep mining",
    },
  };
  const t = meta[locale as keyof typeof meta] ?? meta.zh;
  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    metadataBase: new URL("https://www.dtancai.com"),
    openGraph: {
      title: t.title,
      description: t.description,
      siteName: locale === "zh" ? "北京鼎泰安采矿山水害防治研究院" : "DTA Research Institute",
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "zh" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <html lang={locale} className="h-full scroll-smooth">
        <body className="flex min-h-full flex-col bg-white text-text-primary antialiased">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
