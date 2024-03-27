import React from "react";
const SessionComponent = ({removeSession, session}) => {
    return (
        <div id='' className="bg-slate-200 px-3 py-3 rounded-lg w-full flex justify-between gap-5 text-xs font-bold mb-5">
            <div className="flex flex-col w-1/4">
                <label htmlFor=''>Start Date</label>
                <p>{session.startDate}</p>
            </div>
            <div className="flex flex-col w-1/4">
                <label htmlFor=''>Start Time</label>
                <p>{session.startTime}</p>
            </div>
            <div className="flex flex-col w-1/4">
                <label htmlFor=''>End Time</label>
                <p>{session.endTime}</p>
                
            </div>
            <div className="w-1/12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 " onClick={removeSession} data-id={`${session.id}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        </div>
    )
}

export default SessionComponent