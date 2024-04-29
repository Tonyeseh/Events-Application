import React from "react";
import EventCard from "./Cards/EventCard";
import EventCardLoadState from "./states/EventCardLoadState";

const TrendingSection = ({ events, isLoading }) => {
  return (
    <div className="mx-20 my-32">
      <h1 className="font-bold text-xl pb-6">
        Trending Events around the World
      </h1>
      {isLoading ? (
        <div className="flex flex-wrap -mx-5 -mb-10">
          <EventCardLoadState />
          <EventCardLoadState />
          <EventCardLoadState />
        </div>
      ) : (
        <div className="flex flex-wrap -mx-5 -mb-10">
          {events &&
            events.map((event) => (
              <EventCard
                key={event._id}
                event={event}
              />
            ))}
        </div>
      )}
      <div className="flex justify-center mt-10">
        <button
          className="text-[#2B293D] border border-[#2B293D] px-32 py-2 rounded-lg text-center"
          type="button"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default TrendingSection;
