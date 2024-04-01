import React from "react";

const Button = ({ action, type }) => {
  return (
    <button
      className='w-full py-3 px-10 rounded-md bg-[#2B293D] text-white text-base font-bold'
      type={type}
    >
      {action}
    </button>
  );
};

export default Button;
