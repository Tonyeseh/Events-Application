import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import EventCard from "../components/Cards/EventCard";
import eventImg from "../img/event_image.png";
import useAuth from "../hooks/useAuth";
import { Popover } from "../components/popover/popover";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import EventPageLoading from "../components/states/EventPageLoading";

const EventPage = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { eventId } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState({});
  const [starred, setStarred] = useState(false);
  const [shareRef, setShareRef] = useState(null);
  const [shareOpen, setShareOpen] = useState(false);

  const shareLocation = window.location.href;

  const toggleStarred = async (e) => {
    try {
      if (!starred) {
        const response = await axiosPrivate.get(
          `/events/${eventId}/interested`
        );

        if (response.status === 200) {
          setStarred(true);
        }
      } else {
        const response = await axiosPrivate.get(
          `/events/${eventId}/uninterested`
        );

        if (response.status === 200) {
          setStarred(false);
        }
      }
    } catch (error) {
      if (error?.response.status === 401) {
        navigate("/login", { replace: true, state: { from: location } });
      } else console.log(error);
    }
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const result = await axiosPrivate.get(`/events/${eventId}`);
        if (result.status === 200) {
          if (result.data.interested) {
            setStarred(true);
          }
          setEventData(result.data);
        } else throw new Error("Cannot retrieve event");
      } catch (error) {
        console.log(error);
        navigate("/404");
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvent();
    return (() => {
      console.log("ran effect");
    })();
  }, [eventId, auth.accessToken]);

  return (
    <div>
      <Header />
      {isLoading ? (
        <EventPageLoading />
      ) : (
        eventData && (
          <>
            <div className="my-7 mx-7 md:mx-20 text-[#2B293D] border-b">
              <img
                className="w-full h-[50vh] md:h-[80vh] rounded-xl"
                src={`http://localhost:5000/${eventData.coverImg}`}
                alt=""
              />
              <div className="my-7 flex justify-between">
                <h1 className="md:text-3xl capitalize font-bold md:pr-12  md:w-11/12 w-4/5">
                  {eventData.title}
                </h1>
                <div className="flex h-full justify-between md:w-1/12 w-1/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={starred ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 block m-auto cursor-pointer"
                    onClick={toggleStarred}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setShareOpen((s) => !s)}
                    ref={setShareRef}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  <Popover
                    reference={shareRef}
                    isOpen={shareOpen}
                    onClose={() => setShareOpen(false)}
                  >
                    <li className="flex items-center justify-evenly text-[13px] py-1.5 mx-auto text-gray-600 hover:text-[#ffe047] hover:bg-gray-50">
                      <WhatsappShareButton url={shareLocation}>
                        <WhatsappIcon
                          round={true}
                          size={20}
                        />
                      </WhatsappShareButton>
                      <FacebookShareButton url={shareLocation}>
                        <FacebookIcon
                          round={true}
                          size={20}
                        />
                      </FacebookShareButton>
                      <FacebookMessengerShareButton url={shareLocation}>
                        <FacebookMessengerIcon
                          round={true}
                          size={20}
                        />
                      </FacebookMessengerShareButton>
                      <TwitterShareButton url={shareLocation}>
                        <TwitterIcon
                          round={true}
                          size={20}
                        />
                      </TwitterShareButton>
                      <LinkedinShareButton url={shareLocation}>
                        <LinkedinIcon
                          round={true}
                          size={20}
                        />
                      </LinkedinShareButton>
                      <TelegramShareButton url={shareLocation}>
                        <TelegramIcon
                          round={true}
                          size={20}
                        />
                      </TelegramShareButton>
                    </li>
                  </Popover>
                </div>
              </div>
              <div className="w-full flex flex-wrap justify-between">
                <div className="md:w-1/2">
                  <h2 className="text-lg font-bold my-2">Date and Time</h2>
                  <p className="font-thin my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-3 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <span className="align-middle capitalize">
                      {new Date(eventData.session[0].startDate).toLocaleString(
                        "en-us",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </p>
                  <p className=" font-thin my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-3 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="align-middle">{`${new Date(
                      `${eventData.session[0].startDate}T${eventData.session[0].startTime}`
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })} - ${new Date(
                      `${eventData.session[0].startDate}T${eventData.session[0].endTime}`
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`}</span>
                  </p>
                </div>
                <div className="md:w-1/2 flex flex-col items-end">
                  <button className="bg-[#FFE047] md:max-w-60 rounded-lg py-3 px-10 mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 mr-2 my-auto inline-block"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Buy Tickets
                  </button>
                  <h3 className="font-bold text-xl my-3">Ticket Information</h3>
                  {eventData.ticketType === "free" ? (
                    <p className="font-thin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mr-2 my-auto inline-block"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Free Ticket: $0 each
                    </p>
                  ) : (
                    eventData.tickets &&
                    eventData.tickets.map((element, idx) => (
                      <p
                        className=" font-thin"
                        key={idx}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 mr-2 my-auto inline-block"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {element.ticketName} Ticket: ${element.ticketPrice} each
                      </p>
                    ))
                  )}
                </div>
                <div className="w-full">
                  <h2 className="text-lg font-bold my-2">Location</h2>
                  <p className=" font-thin my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-3 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <span className="align-middle">
                      {eventData.address} ({eventData.location})
                    </span>
                  </p>
                  <img
                    className="w-4/5 mt-3"
                    src={eventImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-3/5 my-7">
                <h2 className="text-lg font-bold my-2">Hosted by</h2>
                <div className="dark:bg-slate-800 gap-6 flex items-center">
                  <div className="bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                        className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                        alt=""
                      />
                      <div className="w-fit transition-all transform duration-500">
                        <h1 className="text-gray-600 dark:text-gray-200 font-bold">
                          Mary Phiri
                        </h1>
                        <p className="text-gray-400">Senior Developer</p>
                        <a
                          href="#user"
                          className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500"
                        >
                          mary@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
                      <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                        </svg>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        <svg
                          viewBox="0 0 960 1000"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-3/5 my-7">
                <h2 className="text-lg font-bold my-2">Event Description</h2>
                <p className="whitespace-pre-wrap text-sm text-slate-600">
                  {eventData.description}
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-3/5 my-7">
                <h2 className="text-lg font-bold my-2">Tags</h2>
                <div className="flex flex-wrap justify-start mb-10 w-full">
                  <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">
                    All
                  </p>
                  <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">
                    Today
                  </p>
                  <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">
                    Tomorrow
                  </p>
                  <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">
                    This Weekend
                  </p>
                  <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">
                    Free
                  </p>

                  <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">
                    All
                  </p>
                  <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">
                    Today
                  </p>
                  <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">
                    Tomorrow
                  </p>
                  <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">
                    This Weekend
                  </p>
                  <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">
                    Free
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-7 mb-28 mx-20 text-[#2B293D]">
              <div className="w-full">
                <h2 className="text-lg font-bold my-7">
                  Other events you may like
                </h2>

                <div className="flex flex-wrap -mx-5 -mb-10">
                  {/* <EventCard />
                  <EventCard />
                  <EventCard /> */}
                </div>
              </div>
            </div>
          </>
        )
      )}
      <Footer />
    </div>
  );
};

export default EventPage;
