import EventCardOne from "../cards/cardOne";
import Tag from "../tag";
import { otherEvents } from "@/app/lib/placeholder";

const tags = [
  { name: "All", link: "localhost:3000/events?location" },
  { name: "Today", link: "localhost:3000/events?location" },
  { name: "Tomorrow", link: "localhost:3000/events?location" },
  { name: "This Weekend", link: "localhost:3000/events?location" },
];

export default function PopularInLocation() {
  return (
    <div className="mx-20 my-24">
      <h1 className="font-bold text-xl pb-4">Popular Events Around You</h1>
      <div className="flex justify-start mb-10">
        {tags.map((tag) => (
          <Tag {...tag} key={tag.name} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-12">
        {otherEvents &&
          otherEvents.map((event) => (
            <EventCardOne key={event._id} event={event} />
          ))}
      </div>

      <div className="flex justify-center ">
        <a
          className="text-[#2B293D] border border-[#2B293D] px-32 py-2 rounded-lg text-center"
          href="/events"
        >
          See more
        </a>
      </div>
    </div>
  );
}
