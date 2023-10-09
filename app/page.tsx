import BuyCards from "@/components/BuyCards";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <BuyCards />
      <NewsSection />
    </div>
  );
}
