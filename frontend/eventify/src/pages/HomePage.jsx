import React, { useEffect, useState } from "react";
import CategorySection from "../components/CategorySection";
import Hero from "../components/Hero";
import PopularInLocation from "../components/PopularInLocation";
import BestOnlineSection from "../components/BestOnlineSection";
import TrendingSection from "../components/TrendingSection";
import NewsLetterSection from "../components/NewLetterSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "../api/axios";

function HomePage() {
  const [data, setData] = useState({
    locationSection: "",
    onlineSection: "",
    trendingSection: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventInLocation = await axios("/events?location=NG");
        const onlineSection = await axios("/events?location=online");
        const trendingSection = await axios("/events?trending=true");
        setData({
          locationSection: eventInLocation.data.events,
          onlineSection: onlineSection.data.events,
          trendingSection: trendingSection.data.events,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    return (() => console.log("homepage effect"))();
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <CategorySection />
      <PopularInLocation events={data.locationSection} />
      <BestOnlineSection events={data.onlineSection} />
      <TrendingSection events={data.trendingSection} />
      <NewsLetterSection />
      <Footer />
    </div>
  );
}

export default HomePage;
