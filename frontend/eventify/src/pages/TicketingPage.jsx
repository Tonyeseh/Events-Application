import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import progress from "../img/ticketing-progress.png";
import freeSVG from "../img/free-icon.svg";
import ticketSVG from "../img/ion_ticket.svg";
import UseFormContext from "../hooks/UseFormContext";
import { Link } from "react-router-dom";
import TicketInfo from "../components/TicketInfo";

const TicketingPage = () => {
  const { data, handleChange, setFormData } = UseFormContext();
  const [ticketData, setTicketData] = useState({
    ticketName: "",
    ticketPrice: "",
  });
  const addTicket = (e) => {
    if (ticketData.ticketName && ticketData.ticketPrice) {
      setFormData((prevData) => {
        prevData.tickets.push(ticketData);
        setTicketData({ ticketName: "", ticketPrice: "" });
        return prevData;
      });
    }
  };
  const deleteTicket = (e) => {
    setFormData((prevData) => {
      prevData.tickets = prevData.tickets.filter((element) => {
        return element.ticketName !== e.target.getAttribute("data-name");
      });

      return prevData;
    });
    setTicketData((prevData) => ({ ...prevData }));
  };
  const handleTicketChange = (e) => {
    setTicketData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <Header />
      <div className='my-10'>
        <div className='mx-10 md:mx-24 text-[#2b293d]'>
          <h1 className='text-2xl font-extrabold'>{data.title}</h1>
          <p>{data.location}</p>
          <p>Time</p>
          <img className='w-full my-12' src={progress} alt='' />
          <div className='my-5'>
            <h3 className='text-xl font-thin w-full'>
              What type of event are you running?
            </h3>
            <ul className='grid w-full gap-6 md:gap-0 grid-cols-2 justify-items-center my-7'>
              <li className='md:max-w-xs'>
                <input
                  type='radio'
                  id='free'
                  name='ticketType'
                  value='free'
                  className='hidden peer'
                  checked={data.ticketType === "free"}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor='free'
                  className='flex flex-wrap items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#2b293d] peer-checked:text-[#2b293d] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                >
                  {" "}
                  <img className='m-auto w-50' src={ticketSVG} alt='' />
                  <h3 className='block w-full text-center'>Ticketed Event</h3>
                  <p className='block w-full text-center text-xs'>
                    My event requires tickets for entry
                  </p>
                </label>
              </li>
              <li className='md:max-w-xs'>
                <input
                  type='radio'
                  id='ticketed'
                  name='ticketType'
                  value='ticketed'
                  className='hidden peer'
                  checked={data.ticketType === "ticketed"}
                  onChange={handleChange}
                />
                <label
                  htmlFor='ticketed'
                  className='flex flex-wrap items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#2b293d] peer-checked:text-[#2b293d] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                >
                  <img className='m-auto' src={freeSVG} alt='' />
                  <h3 className='block w-full text-center'>Free Event</h3>
                  <p className='block w-full text-center text-xs'>
                    I'm running a free event
                  </p>
                </label>
              </li>
            </ul>
          </div>
          <div className='my-5'>
            <h3 className='text-xl font-thin w-full'>
              What tickets are you selling?
            </h3>
            <div className='flex gap-5 my-3 items-center'>
              <div className='my-2 w-1/2 md:w-1/3'>
                <div className='flex flex-col'>
                  <label className='text-sm font-bold' htmlFor='ticket-name'>
                    Ticket Name
                  </label>
                  <input
                    className='p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm'
                    type='text'
                    id='ticket-name'
                    placeholder='Ticket Name eg General Admission'
                    name='ticketName'
                    value={ticketData.ticketName}
                    onChange={handleTicketChange}
                  />
                </div>
              </div>
              <div className='my-2 w-1/2 md:w-1/3'>
                <div className='flex flex-col'>
                  <label className='font-bold text-sm' htmlFor='ticket-price'>
                    Ticket Price
                  </label>
                  <input
                    className='p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm'
                    type='number'
                    id='ticket-price'
                    placeholder='Ticket Price'
                    name='ticketPrice'
                    value={ticketData.ticketPrice}
                    onChange={handleTicketChange}
                  />
                </div>
              </div>
              <div className='my-2 w-1/2 md:w-1/3 m-auto'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                  onClick={addTicket}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
              </div>
            </div>
            {data.tickets.map((element, idx) => (
              <TicketInfo
                ticket={element}
                key={idx}
                deleteTicket={deleteTicket}
              />
            ))}
          </div>
          <div className='flex gap-5 justify-end my-5'>
            <Link to={`/create-event/banner`}>
              <button className='py-2 px-5 rounded-md font-bold'>
                Go back
              </button>
            </Link>
            <Link to={`/create-event/review`}>
              <button className='py-2 px-5 rounded-md font-bold text-white bg-[#2b293d]'>
                Save & Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TicketingPage;
