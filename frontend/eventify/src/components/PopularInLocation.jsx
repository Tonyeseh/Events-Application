import React from "react";
import EventCard from "./Cards/EventCard";
import EventCardLoadState from "./states/EventCardLoadState";

const PopularInLocation = ({ events, isLoading }) => {
  return (
    <div className="mx-20 my-32">
      <h1 className="font-bold text-xl pb-4">Popular Events Around You</h1>
      <div className="flex justify-start mb-10">
        <p className="rounded-full border-slate-400 border px-3 py-1 text-xs mr-3 text-slate-500 font-bold">
          All
        </p>
        <p className="rounded-full border-slate-400 border px-3 py-1 text-xs mr-3 text-slate-500 font-bold">
          Today
        </p>
        <p className="rounded-full border-slate-400 border px-3 py-1 text-xs mr-3 text-slate-500 font-bold">
          Tomorrow
        </p>
        <p className="rounded-full border-slate-400 border px-3 py-1 text-xs mr-3 text-slate-500 font-bold">
          This Weekend
        </p>
        <p className="rounded-full border-slate-400 border px-3 py-1 text-xs mr-3 text-slate-500 font-bold">
          Free
        </p>
      </div>
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

export default PopularInLocation;
