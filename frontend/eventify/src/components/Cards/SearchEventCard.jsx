import React from "react";
import { Link } from "react-router-dom";
// import eventImg from "../../img/event_image.png";

const SearchEventCard = ({ event }) => {
  console.log(event);
  return (
    <Link className="w-1/2" to={`/events/${event._id}`}>
      <div className="px-5 mb-10 flex">
        <div className="relative w-1/2">
          <img
            className="w-full h-full rounded-lg"
            src={`http://localhost:5000/${event.coverImg}`}
            alt="cover"
          />
          <div className="h-6 w-6 rounded-full bg-white absolute top-2 right-2 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 block m-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
          <span className="p-1.5 bg-[#ffe047] absolute bottom-0 left-0 text-xs rounded-tr">
            {event.category}
          </span>
        </div>
        <div className="flex justify-start py-1 w-1/2">
          <div className="pl-3 text-sm text-gray-700">
            <p className="line-clamp-2 text-base font-semibold p-0.5">
              {event.title}
            </p>
            <p className="p-0.5 font-medium">
              {event &&
                `${new Date(event.session[0].startDate).toLocaleString(
                  "en-us",
                  {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  }
                )}`}{" "}
              | {event.location === "online" ? "Online" : event.address}
            </p>
            <p className="p-0.5 font-thin">
              {event &&
                `${new Date(
                  `${event.session[0].startDate}T${event.session[0].startTime}`
                ).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })} - ${new Date(
                  `${event.session[0].startDate}T${event.session[0].endTime}`
                ).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
            </p>
            <div className="flex justify-start p-1 text-center text-[#287921]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 my-auto"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="mx-1">
                {event.ticketType === "free"
                  ? "Free"
                  : event.tickets[0].ticketPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchEventCard;
