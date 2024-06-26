import React from "react";

const TicketInfo = ({ ticket, deleteTicket }) => {
  return (
    <div className='bg-slate-200 py-3 px-3 w-2/3 rounded-lg flex justify-between my-2'>
      <p className='text-base font-bold'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-4 h-4 mr-2 my-auto inline-block'
        >
          <path
            fillRule='evenodd'
            d='M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z'
            clipRule='evenodd'
          />
        </svg>
        {ticket.ticketName}: ${ticket.ticketPrice} each
      </p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
        data-name={ticket.ticketName}
        onClick={deleteTicket}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
        />
      </svg>
    </div>
  );
};

export default TicketInfo;
