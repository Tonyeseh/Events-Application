import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { axiosPrivate } from "../api/axios";
import EventCard from "../components/Cards/EventCard";

const InterestedPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPrivate("events");
        console.log(response);
        setEvents(response.data.events);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    return (() => console.log("interested Page effect"))();
  }, []);
  return (
    <>
      <Header />
      <div className='my-10'>
        <div className='mx-10 md:mx-24 text-[#2B293D]'>
          <h1 className='text-2xl font-extrabold mb-7'>Interested Events</h1>
          <div className='flex flex-wrap -mx-5 -mb-10'>
            {events &&
              events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InterestedPage;
