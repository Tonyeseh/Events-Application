import { Datepicker } from "flowbite-react";

export default function Hero() {
  return (
    <section className="bg-home-hero bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
      <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-white md:py-16 lg:px-0 z-1">
        <div className="mb-6 max-w-screen-md md:mb-0">
          <h1 className="mb-4 text-4xl  lg:text-6xl font-extrabold tracking-tight leading-5 text-white md:text-5xl ">
            Every home is a destination
          </h1>
          <p className="mb-6 font-light text-gray-300 lg:mb-8 md:text-xl lg:text-xl">
            The best of Luxury Retreats is now Flowbite Luxe—offering the
            world&apos;s most extraordinary homes with the highest standard of
            service.
          </p>
          <a
            href="#"
            className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-yellow-700 hover:bg-yellow-800 _FONMPVaCsLFJJGDaaIL focus:ring-yellow-900 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          >
            Sign In / Register
          </a>
        </div>
        <form
          action="#"
          className="grid gap-y-4 p-4 mt-8 w-full bg-white rounded md:gap-x-4 md:grid-cols-9 lg:mt-12 _cpMMPjFQqjJu4i0Puod"
        >
          <div className="md:col-span-3">
            <label htmlFor="location-form" className="sr-only">
              Location
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 eCx_6PNzncAD5yo7Qcic"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="location-form"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2.5 _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                placeholder="Search destinations"
              />
            </div>
          </div>
          <div
            date-rangepicker=""
            datepicker-orientation="top"
            className="grid grid-cols-2 gap-x-4 md:col-span-3"
          >
          <Datepicker minDate={new Date()} name="start" className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-yellow-500 dark:focus:border-yellow-500 datepicker-input" placeholder="Check in" />
          <Datepicker minDate={new Date()}  name="end" className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-yellow-500 dark:focus:border-yellow-500 datepicker-input" placeholder="Check out" />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="guests" className="sr-only">
              Select a Category
            </label>
            <select
              id="guests"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            >
              <option>Category</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
          <button
            type="submit"
            className="md:col-span-2 justify-center w-auto text-white bg-yellow-700 hover:bg-yellow-800 _FONMPVaCsLFJJGDaaIL focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 inline-flex items-center"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
