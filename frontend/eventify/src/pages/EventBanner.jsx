import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import progress from "../img/banner-progress.png";
import { Link } from 'react-router-dom';
import UseFormContext from '../hooks/UseFormContext';

const EventBanner = () => {
  const {setData} = UseFormContext()
  const [file, setFile] = useState(null);

  const handleFileSubmit = (e) => {
    setFile(e.target.files[0])
    setData(e.target.files[0])
  }
  return (
    <div>
        <Header />
        <div className='my-10'>
        <div className="mx-10 md:mx-24 text-[#2b293d]">
        <h1 className="text-2xl font-extrabold">Event Title</h1>
            <p>Location</p>
            <p>Time</p>
            <img className="w-full my-12" src={progress} alt="" />
            <div>
                <h3 className="text-xl font-thin w-full">
                    Event Details
                </h3>
                <input className="block mt-5 w-full text-base text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" name='cover_img' type="file" value={file} onChange={handleFileSubmit} />
                <p className="mt-1 text-sm text-gray-500" id="file_input_help">Feature Image must be at least 1170 pixels wide by 504 pixels high.</p>
                <p className="mt-1 text-sm text-gray-500" id="file_input_help">Valid file formats: JPG, GIF, PNG.</p>
            </div>

            <div className='flex gap-5 justify-end my-5'>
        <Link to='/create-event'><button className='py-2 px-5 rounded-md font-bold'>Go back</button></Link>
        <Link to='/create-event/ticketing'><button className='py-2 px-5 rounded-md font-bold text-white bg-[#2b293d]'>Save & Continue</button></Link>
        </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default EventBanner
