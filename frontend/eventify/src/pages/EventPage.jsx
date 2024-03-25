import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventCard from "../components/Cards/EventCard";
import eventImg from '../img/event_image.png'

const EventPage = () => {
    return (
        <div>
            <Header />
            <div className="my-7 mx-20 text-[#2B293D] border-b">
                <img className="w-full h-20 md:h-96 rounded-xl" src={eventImg} alt="" />
                <div className="my-7 flex justify-between">
                    <h1 className="md:text-3xl font-bold md:pr-12  md:w-11/12 w-4/5">Title of Event</h1>
                    <div className="flex h-full justify-between md:w-1/12 w-1/5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block m-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="md:w-2/5">
                        <h2 className="text-lg font-bold my-2">Date and Time</h2>
                        <p className="text-xs font-thin my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                            <span className="align-middle">Saturday, 2 December 2024</span>
                        </p>
                        <p className="text-xs font-thin my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            <span className="align-middle">3PM - 5PM</span>
                        </p>
                    </div>
                    <div className="">
                        <button className="bg-[#FFE047] rounded-lg py-3 px-10 mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 my-auto inline-block">
                                <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                            </svg>
                            Buy Tickets
                        </button>
                        <h3 className="font-bold my-3">
                            Ticket Information
                        </h3>
                        <p className="text-xs font-thin">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 my-auto inline-block">
                                    <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                                </svg>
                                Standard Ticket: $12 each
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-3/5">
                    <h2 className="text-lg font-bold my-2">Location</h2>
                    <p className="text-xs font-thin my-2 flex items-start md:w-1/2 lg:w-3/5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-2/12 mr-2 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span className="align-middle">Some long text that is repeated. Some long text that is repeatedSome long text that is repeatedSome long text that is repeatedSome long text that is repeatedSome long text that is repeated</span>
                        </p>
                        <img className="w-4/5 mt-3" src={eventImg} alt="" />
                </div>
                <div className="w-full md:w-1/2 lg:w-3/5 my-7">
                    <h2 className="text-lg font-bold my-2">Hosted by</h2>
                    <p>SomeOne</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-3/5 my-7">
                    <h2 className="text-lg font-bold my-2">Event Description</h2>
                    <p className="whitespace-pre-wrap text-sm text-slate-600">

                        Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!

                        City Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!

Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!

3 Reasons to attend the event:

1. The FIRST Christmas concert of Mumbai!
2. A special Christmas Choir!
3. Special Dance performances and many more surprises!
</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-3/5 my-7">
                    <h2 className="text-lg font-bold my-2">Tags</h2>
            <div className="flex flex-wrap justify-start mb-10 w-full">
                <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">All</p>
                <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">Today</p>
                <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">Tomorrow</p>
                <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">This Weekend</p>
                <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">Free</p>

                <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">All</p>
                <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">Today</p>
                <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">Tomorrow</p>
                <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">This Weekend</p>
                <p className="rounded-full bg-slate-100 border px-3 py-1 text-sm font-thin mr-7 mb-5 text-slate-700">Free</p>
            </div>
                </div>
            </div>
            <div className="mt-7 mb-28 mx-20 text-[#2B293D]">
                    <div className="w-full">
                        <h2 className="text-lg font-bold my-7">Other events you may like</h2>

            <div className="flex flex-wrap -mx-5 -mb-10">
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default EventPage
