import React from "react";

const Hero = () => {
    return (
        <div className="h-80 bg-gradient-to-r from-[#2B293D] via-[#5A5A5A] to-[#2b293d] font-bold font-white text-3xl px-60 pt-[100px] text-white">
            <p className="pb-2">Don't miss out!</p>
            <p className="pb-7">Explore the <span className="text-[#ffe047]">vibrant events</span> happening locally and globally.</p>
            <div className="relative mt-2 rounded-md shadow-sm w-3/4 m-auto">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm p-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</span>
                </div>
            <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-3 pl-20 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search Events, Locations, Categories..." />
            <div className="absolute inset-y-0 right-0 flex items-center pr-8 border-l border-l-slate-300">
            <span className="text-gray-500 sm:text-sm pl-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

</span>
            <label htmlFor="currency" className="sr-only">Currency</label>
            <select id="currency" name="currency" className="h-full rounded-md border-0 bg-transparent py-0 pr-7 text-gray-500  sm:text-sm">
                <option>Abuja</option>
                <option>Lagos</option>
                <option>Port Harcourt</option>
            </select>
            </div>
  </div>
        </div>
    )
}

export default Hero
