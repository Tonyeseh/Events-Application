import React from "react";
import CategorySection from "../components/CategorySection";
import Hero from "../components/Hero";
import PopularInLocation from "../components/PopularInLocation";
import BestOnlineSection from "../components/BestOnlineSection";
import TrendingSection from "../components/TrendingSection";
import NewsLetterSection from "../components/NewLetterSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage() {
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
    )
}

export default HomePage
