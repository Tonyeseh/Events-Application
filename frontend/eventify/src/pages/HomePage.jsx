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
import useAuth from "../hooks/useAuth";

function HomePage() {
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    locationSection: "",
    onlineSection: "",
    trendingSection: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (auth.user) {
          const eventInLocation = await axios("/events?location=NG", {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`,
            },
          });
          const onlineSection = await axios("/events?location=online", {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`,
            },
          });
          const trendingSection = await axios(
            "/events?trending=true",
            {
              headers: {
                Authorization: `Bearer ${auth.accessToken}`,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${auth.accessToken}`,
              },
            }
          );
          setData({
            locationSection: eventInLocation.data.events,
            onlineSection: onlineSection.data.events,
            trendingSection: trendingSection.data.events,
          });
        } else {
          const eventInLocation = await axios("/events?location=NG");
          const onlineSection = await axios("/events?location=online");
          const trendingSection = await axios("/events?trending=true");
          setData({
            locationSection: eventInLocation.data.events,
            onlineSection: onlineSection.data.events,
            trendingSection: trendingSection.data.events,
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return (() => console.log("homepage effect"))();
  }, [auth]);
  return (
    <div>
      <Header />
      <Hero />
      <CategorySection />
      <PopularInLocation
        events={data.locationSection}
        isLoading={isLoading}
      />
      <BestOnlineSection
        events={data.onlineSection}
        isLoading={isLoading}
      />
      <TrendingSection
        events={data.trendingSection}
        isLoading={isLoading}
      />
      <NewsLetterSection />
      <Footer />
    </div>
  );
}

export default HomePage;
