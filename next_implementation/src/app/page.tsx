import BestOnlineSection from "./ui/home/bestOnlineSection";
import Hero from "./ui/home/hero";
import PopularInLocation from "./ui/home/popularInLocation";
import TrendingSection from "./ui/home/trendingSection";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <PopularInLocation />
      <BestOnlineSection />
      <TrendingSection />
      {/* </main> */}
    </>
  );
}
