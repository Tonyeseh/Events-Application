import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import progress from "../img/review-progress.png";

const ReviewEvent = () => {
  const saveForLater = (e) => {
    e.preventDefault()


  }
  const publishEvent = (e) => {
    e.preventDefault()


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
            <p className='py-5 text-sm text-[#2b293dd3]'>Nearly there! Check everything's correct</p>
        <div className="border-2 border-[#2b293d] rounded-xl my-5 h-96 w-full p-3">

        </div>
        <div className='flex gap-5 justify-end'>
          <button onClick={saveForLater} className='py-2 px-5 rounded-md font-bold bg-[#FFE047]'>Save for Later</button>
          <button onClick={publishEvent} className='py-2 px-5 rounded-md font-bold text-white bg-[#2b293d]'>Publish Event</button>
        </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default ReviewEvent
