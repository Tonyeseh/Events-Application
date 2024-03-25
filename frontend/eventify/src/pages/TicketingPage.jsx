import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import progress from "../img/ticketing-progress.png";
import freeSVG from '../img/free-icon.svg';
import ticketSVG from '../img/ion_ticket.svg'
import UseFormContext from '../hooks/UseFormContext';

const TicketingPage = () => {
    const {data, handleChange} = UseFormContext()
  return (
    <div>
        <Header />
        <div className='my-10'>
        <div className="mx-10 md:mx-24 text-[#2b293d]">
        <h1 className="text-2xl font-extrabold">Event Title</h1>
            <p>Location</p>
            <p>Time</p>
                    <img className="w-full my-12" src={progress} alt="" />
            <div className="my-5">
            <h3 className="text-xl font-thin w-full">
                    What type of event are you running?
                </h3>
                <ul className="grid w-full gap-6 md:gap-0 grid-cols-2 justify-items-center my-7">
                    <li className='md:max-w-xs'>
                        <input type="radio" id="free" name="ticket_type" value="free" className="hidden peer" checked={data.ticket_type === 'free'} onChange={handleChange}  required />
                        <label htmlFor="free" className="flex flex-wrap items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#2b293d] peer-checked:text-[#2b293d] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                       <img className='m-auto w-50' src={ticketSVG} alt="" />
                        <h3 className='block w-full text-center'>Ticketed Event</h3>
                        <p className='block w-full text-center text-xs'>My event requires tickets for entry</p>
                        </label>
                    </li>
                    <li className='md:max-w-xs'>
                        <input type="radio" id="ticketed" name="ticket_type" value="ticketed" className="hidden peer" checked={data.ticket_type === 'ticketed'} onChange={handleChange} />
                        <label htmlFor="ticketed" className="flex flex-wrap items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#2b293d] peer-checked:text-[#2b293d] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className='m-auto' src={freeSVG} alt="" />
                            <h3 className='block w-full text-center'>Free Event</h3>
                        <p className='block w-full text-center text-xs'>I'm running a free event</p>
                        </label>
                    </li>
                </ul>
            </div>
            <div className='my-5'>
            <h3 className="text-xl font-thin w-full">
                    What tickets are you selling?
                </h3>
                <div className='flex gap-5 my-3'>
                <div className="my-2 w-1/2">
                    <div className='flex flex-col'>
                    <label className='text-sm font-bold' htmlFor="ticket-name">Ticket Name</label>
                    <input className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm" type="text" id="ticket-name" placeholder="Ticket Name eg General Admission" name="ticket-price" />
                </div>
                </div>
                <div className="my-2 w-1/2">
                    <div className='flex flex-col'>
                    <label className='font-bold text-sm' htmlFor="ticket-price">Ticket Price</label>
                    <input className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm" type="number" id="ticket-price" placeholder="Ticket Price" name="ticket-price" />
                </div>
                </div>
                </div>
            </div>
            <div className='flex gap-5 justify-end my-5'>
        <button className='py-2 px-5 rounded-md font-bold'>Go back</button>
        <button className='py-2 px-5 rounded-md font-bold text-white bg-[#2b293d]'>Save & Continue</button>
        </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default TicketingPage
