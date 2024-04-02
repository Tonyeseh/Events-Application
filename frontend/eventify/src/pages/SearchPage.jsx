import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventHero from "../components/EventHero";
import SearchEventCard from "../components/Cards/SearchEventCard";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <EventHero />
      <div className='flex w-full my-10 px-10'>
        <div className='w-1/5'>
          <h2 className='md:text-2xl font-bold text-[#2B293D]'>Filters</h2>
          <div className='text-[#2b293d88] py-7 border-b w-10/12'>
            <h3 className='text-[#2D2C3C] pb-4 text-lg'>Price</h3>
            <div className=''>
              <div className='flex items-center py-1'>
                <input
                  id='free'
                  type='checkbox'
                  value=''
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  htmlFor='free'
                  className='ms-2 text-sm font-medium text-gray-500'
                >
                  Free
                </label>
              </div>
            </div>
            <div className='flex items-center py-1'>
              <input
                id='paid'
                type='checkbox'
                value=''
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                htmlFor='paid'
                className='ms-2 text-sm font-medium text-gray-500'
              >
                Paid
              </label>
            </div>
          </div>
          <div className='text-[#2b293d88] py-7 border-b w-10/12'>
            <h3 className='text-[#2D2C3C] pb-4 text-lg'>Price</h3>
            <div className=''>
              <div className='flex items-center py-1'>
                <input
                  id='free'
                  type='checkbox'
                  value=''
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  htmlFor='free'
                  className='ms-2 text-sm font-medium text-gray-500'
                >
                  Free
                </label>
              </div>
            </div>
            <div className='flex items-center py-1'>
              <input
                id='paid'
                type='checkbox'
                value=''
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                htmlFor='paid'
                className='ms-2 text-sm font-medium text-gray-500'
              >
                Paid
              </label>
            </div>
          </div>
        </div>
        <div className='w-4/5 border-l'>
          <div className='w-full md:h-12 flex justify-end items-center mb-7'>
            <p className='my-auto mr-5'>Sort by:</p>
            <div className='inline-block relative w-1/5'>
              <select className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
                <option>Relevance</option>
                <option>Event Title</option>
                <option>Event Date</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-wrap'>
            <SearchEventCard />
            <SearchEventCard />
            <SearchEventCard />
            <SearchEventCard />
            <SearchEventCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
