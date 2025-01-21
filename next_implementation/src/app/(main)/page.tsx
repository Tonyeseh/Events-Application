import BestOnlineSection from "../ui/home/bestOnlineSection";
import Hero from "../ui/home/hero";
import PopularInLocation from "../ui/home/popularInLocation";
import TrendingSection from "../ui/home/trendingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularInLocation />
      <BestOnlineSection />
      <TrendingSection />
    </>
  );
}
