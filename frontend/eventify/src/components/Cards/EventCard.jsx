import React from "react";
import eventImg from '../../img/event_image.png'

const EventCard = () => {
    return (
        <div className="w-1/3 px-5 mb-10">
            <div className="relative">
                <img className="w-full  rounded-t-lg" src={eventImg} alt="" />
                <div className="h-8 w-8 rounded-full bg-white absolute top-2 right-2 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block m-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
                </div>
                <span className="p-1.5 bg-[#ffe047] absolute bottom-0 left-0 text-xs rounded-tr">Category</span>
            </div>
            <div className="flex justify-start mt-5">
                <div className="text-center w-1/3">
                    <p className="text-[#4539B4]">
                    NOV
                    </p>
                    <p className="text-sm font-bold">
                    Day - Day
                    </p>
                </div>
                <div className="pl-3 text-sm text-gray-700">
                    <h3 className="text-base font-semibold p-0.5"> This is the title of this event and I am checking the overflow property</h3>
                    <p className="p-0.5 font-medium">location</p>
                    <p className="p-0.5 font-thin">time</p>
                    <div className="flex justify-start p-1 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 my-auto">
  <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
</svg>

                        <p className="mx-1">price</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4539B4" className="w-4 h-4 my-auto ml-4 pr-0.5">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
</svg>

                        <p className="">5 interested</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard
