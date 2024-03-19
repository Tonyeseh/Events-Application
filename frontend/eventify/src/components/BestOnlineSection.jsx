import React from "react";
import EventCard from "./Cards/EventCard";

const BestOnlineSection = () => {
    return (
        <div className="mx-20 my-32">
            <h1 className="font-bold text-xl pb-6">
                Discover Best of Online Events
            </h1>
            <div className="flex flex-wrap -mx-5 -mb-10">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
            <div className="flex justify-center mt-10">
                <button className="text-[#2B293D] border border-[#2B293D] px-32 py-2 rounded-lg text-center" type="button">See more</button>
            </div>
        </div>
    )
}

export default BestOnlineSection
