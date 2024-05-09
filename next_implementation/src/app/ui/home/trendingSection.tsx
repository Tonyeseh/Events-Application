import EventCardOne from "../cards/cardOne";
import { otherEvents } from "@/app/lib/placeholder";

export default function TrendingSection() {
  return (
    <div className="mx-20 my-24">
      <h1 className="font-bold text-xl pb-4">
        Trending Events around the World
      </h1>
      <div className="grid grid-cols-3 gap-12">
        {otherEvents &&
          otherEvents.map((event) => (
            <EventCardOne key={event._id} event={event} />
          ))}
      </div>

      <div className="flex justify-center ">
        <a
          className="text-[#2B293D] border border-[#2B293D] px-32 py-2 rounded-lg text-center"
          href="/events?trending=true"
        >
          See more
        </a>
      </div>
    </div>
  );
}
