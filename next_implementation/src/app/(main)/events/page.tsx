import SearchEventCard from "../../ui/search/searchEventCard";
import { otherEvents } from "../../lib/placeholder";
import SearchDrawer from "../../ui/search/searchDrawer";

export default function Page() {
  return (
    <div className="grid">
      <SearchDrawer />
      <div className="w-full my-10 px-10">
        <div className="w-full md:h-12 flex justify-end items-center mb-7">
          <p className="my-auto mr-5">Sort by:</p>
          <div className="inline-block relative w-1/5">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Relevance</option>
              <option>Event Title</option>
              <option>Event Date</option>
            </select>
          </div>
        </div>
        <SearchEventCard event={otherEvents[0]} />
      </div>
    </div>
  );
}
