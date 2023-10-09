import AdvantagesSection from "@/components/AdvantagesSection";
import BuyCards from "@/components/BuyCards";
import HelpSection from "@/components/HelpSection";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import PromotionalSection from "@/components/PromotionalSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <BuyCards />
      <NewsSection />
      <HelpSection />
      <AdvantagesSection />
      <PromotionalSection />
    </div>
  );
}
