import React from "react";

const NewsLetterSection = () => {
    return (
        <div className=" flex justify-between w-full h-60 bg-[#FFE047] px-20 py-15 text-[#2D2C3C]">
            <div className="my-auto w-2/4 m-7">
                <h2 className="text-2xl font-bold">
                    Subscribe to our NewsLetter
                </h2>
                <p className="text-base font-light">Receive our weekly newsletter & updates with new events from your favourite organizers & venues.</p>
            </div>
            <div className="my-auto w-2/4 m-7">
                <input className="p-2.5 text-base w-3/4 rounded-l-lg" type="text" placeholder="Enter your email address" />
                <button className="bg-[#2D2C3C] text-[#ffe047] p-2.5 w-1/4 rounded-r-lg" type="button">Subcribe</button>
            </div>
        </div>
    )
}

export default NewsLetterSection
