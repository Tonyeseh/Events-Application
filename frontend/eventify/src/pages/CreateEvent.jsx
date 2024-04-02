import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import progress from "../img/edit-progress.png";
import UseFormContext from "../hooks/UseFormContext";
import SessionComponent from "../components/SessionInfo";

const CreateEvent = () => {
  const { handleChange, data, setFormData } = UseFormContext();
  const [errorMsg, setErrMsg] = useState("");
  const [sessionChildren, setSessionChildren] = useState({
    id: Math.random(100000),
    startTime: "",
    startDate: "",
    endTime: "",
  });

  const addSession = (e) => {
    if (
      sessionChildren.endTime &&
      sessionChildren.startDate &&
      sessionChildren.startTime
    ) {
      setFormData((prevData) => {
        prevData.session.push(sessionChildren);
        return prevData;
      });
      setSessionChildren({
        id: Math.random(100000),
        startTime: "",
        startDate: "",
        endTime: "",
      });
    }
  };

  const removeSession = (e) => {
    const id = e.target.getAttribute("data-id");
    setFormData((prevData) => {
      prevData.session = prevData.session.filter((element) => {
        return element.id.toString() !== id;
      });
      return prevData;
    });
    setSessionChildren((prevData) => ({ ...prevData }));
  };

  const handleSessionChange = (e) => {
    setSessionChildren((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const validateForm = (e) => {
    if (
      !data.title ||
      !data.category ||
      !data.type ||
      !data.session ||
      !data.location ||
      !data.description ||
      data.description?.length < 20
    ) {
      e.preventDefault();
    }
    setErrMsg("Some fields have not been filled or filled incorrectly!");
  };

  return (
    <div>
      <Header />
      <div className='my-10'>
        <div className='mx-10 md:mx-24 text-[#2b293d]'>
          <h1 className='text-2xl font-extrabold'>Create a New Event</h1>
          <img className='w-full my-12' src={progress} alt='' />
          {errorMsg && (
            <div
              className='w-2/3 mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-5 rounded relative'
              role='alert'
            >
              <strong className='font-bold'>Holy smokes!</strong>
              <span className='block sm:inline'> {errorMsg}</span>
              <span
                onClick={() => setErrMsg("")}
                className='absolute top-0 bottom-0 right-0 px-4 py-3'
              >
                <svg
                  className='fill-current h-6 w-6 text-red-500'
                  role='button'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <title>Close</title>
                  <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                </svg>
              </span>
            </div>
          )}
          <div className='my-5'>
            <div className='flex gap-4'>
              <div className='w-1/4'></div>
              <h3 className='text-xl font-thin w-full'>Event Details</h3>
            </div>
            <div className='flex justify-around my-3 gap-4'>
              <label className='text-sm w-1/4 text-right' htmlFor='title'>
                Event Title<span className='text-red-500'>*</span>
              </label>
              <input
                className='p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm'
                type='text'
                id='title'
                placeholder='Enter the name of your event'
                name='title'
                onChange={handleChange}
                value={data.title}
              />
            </div>
            <div className='flex justify-around my-3 gap-4'>
              <label className='text-sm w-1/4 text-right' htmlFor='category'>
                Event Category<span className='text-red-500'>*</span>
              </label>
              <select
                className='p-2 bg-white border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm'
                name='category'
                id='category'
                onChange={handleChange}
                defaultValue={data.category}
              >
                <option value=''>Please select one</option>
                <option value='Category One'>Category One</option>
                <option value='Category Two'>Category Two</option>
              </select>
            </div>
          </div>
          <div className='my-5'>
            <div className='flex gap-4'>
              <div className='w-1/4'></div>
              <h3 className='text-xl font-thin w-full'>Date & Time</h3>
            </div>
            <div className='flex justify-around my-5 gap-4'>
              <div className='text-sm w-1/4 text-right'>
                Event Type<span className='text-red-500'>*</span>
              </div>
              <div className='w-full'>
                <input
                  className='mr-3 text-[#2b293d] border-[#2b293d] focus:ring-[#2b293d] bg-[#2b293d]'
                  type='radio'
                  id='single'
                  value='single'
                  name='type'
                  checked={data.type === "single"}
                  onChange={handleChange}
                />
                <label className='text-sm font-bold mr-7' htmlFor='single'>
                  Single Event
                </label>
                <input
                  className='mr-3 text-[#2b293d] border-[#2b293d] focus:ring-[#2b293d] bg-[#2b293d]'
                  type='radio'
                  id='recurring'
                  value='recurring'
                  name='type'
                  checked={data.type === "recurring"}
                  onChange={handleChange}
                />
                <label className='text-sm font-bold mr-7' htmlFor='recurring'>
                  Recurring Event
                </label>
              </div>
            </div>
            <div className='flex justify-around my-5 gap-4'>
              <label className='text-sm w-1/4 text-right' htmlFor=''>
                Session(s)<span className='text-red-500'>*</span>
              </label>
              <div className='flex flex-wrap w-full'>
                <div
                  id='session-info'
                  className='w-full flex gap-5 text-xs font-bold mb-5'
                >
                  <div className='flex flex-col w-1/4'>
                    <label htmlFor='startDate'>
                      Start Date<span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='date'
                      name='startDate'
                      id='startDate'
                      onChange={handleSessionChange}
                      value={sessionChildren.startDate}
                    />
                  </div>
                  <div className='flex flex-col w-1/4'>
                    <label htmlFor='startTime'>
                      Start Time<span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='time'
                      name='startTime'
                      id='startTime'
                      onChange={handleSessionChange}
                      value={sessionChildren.startTime}
                    />
                  </div>
                  <div className='flex flex-col w-1/4'>
                    <label htmlFor='endTime'>
                      End Time<span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='time'
                      name='endTime'
                      id='endTime'
                      onChange={handleSessionChange}
                      value={sessionChildren.endTime}
                    />
                  </div>
                  <div className='w-1/12'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                      onClick={addSession}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                      />
                    </svg>
                  </div>
                </div>
                {data.session.map((session) => {
                  return (
                    <SessionComponent
                      key={session.id}
                      session={session}
                      removeSession={removeSession}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className='my-5'>
            <div className='flex gap-4'>
              <div className='w-1/4'></div>
              <h3 className='text-xl font-thin w-full'>Location</h3>
            </div>
            <div className='flex justify-around my-3 gap-4'>
              <label className='text-sm w-1/4 text-right' htmlFor='location'>
                Where will your event take place?
                <span className='text-red-500'>*</span>
              </label>
              <input
                className='p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm'
                type='text'
                id='location'
                placeholder='Enter a location...'
                name='location'
                onChange={handleChange}
                value={data.location}
              />
            </div>
          </div>
          <div className='my-5'>
            <div className='flex gap-4'>
              <div className='w-1/4'></div>
              <h3 className='text-xl font-thin w-full'>
                Additional Information
              </h3>
            </div>
            <div className='flex justify-around my-3 gap-4'>
              <label className='text-sm w-1/4 text-right' htmlFor='description'>
                Event Description<span className='text-red-500'>*</span>
              </label>
              <textarea
                className='p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm'
                type='textarea'
                id='description'
                placeholder="Describe what's special about your event & other important details."
                name='description'
                onChange={handleChange}
                value={data.description}
              />
            </div>
          </div>
          <div className='flex justify-end'>
            <Link to='/create-event/banner'>
              <button
                className='bg-[#2b293d] text-white rounded-md py-2 px-5 font-bold'
                type='button'
                onClick={validateForm}
              >
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

export default CreateEvent;
