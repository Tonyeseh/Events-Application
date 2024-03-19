import React from "react";
import Header from './components/Header';
import Hero from './components/Hero'
import CategorySection from "./components/CategorySection";
import PopularInLocation from "./components/PopularInLocation";
import BestOnlineSection from "./components/BestOnlineSection";
import TrendingSection from "./components/TrendingSection";
import Footer from "./components/Footer";
import NewsLetterSection from "./components/NewLetterSection";

function App() {
  return (
    <div>
        <Header />
        <Hero />
        <CategorySection />
        <PopularInLocation />
        <BestOnlineSection />
        <TrendingSection />
        <NewsLetterSection />
        <Footer />
    </div>
  );
}

export default App;
