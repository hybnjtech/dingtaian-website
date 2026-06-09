import { setRequestLocale } from "next-intl/server";
import HeroCarousel from "@/components/home/HeroCarousel";
import AboutSummary from "@/components/home/AboutSummary";
import ResearchGrid from "@/components/home/ResearchGrid";
import ExpertShowcase from "@/components/home/ExpertShowcase";
import NewsSection from "@/components/home/NewsSection";
import StatsBanner from "@/components/home/StatsBanner";
import PartnersSection from "@/components/home/PartnersSection";
import ProjectPortfolio from "@/components/home/ProjectPortfolio";
import SafetyKnowledgeTicker from "@/components/home/SafetyKnowledgeTicker";
import ChiefEngineerExchange from "@/components/home/ChiefEngineerExchange";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroCarousel />
      <AboutSummary />
      <ResearchGrid />
      <ProjectPortfolio />
      <ExpertShowcase />
      <StatsBanner />
      <NewsSection />
      <SafetyKnowledgeTicker />
      <ChiefEngineerExchange />
      <PartnersSection />
    </>
  );
}
