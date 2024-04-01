import React from "react";
import catImg from "../img/cat_placeholder.png";

const Category = ({ data }) => {
  return (
    <div className='w-32 h-32'>
      <img src={catImg} alt='' className='rounded-full h-28 w-28' />
      <p className='text-center text-sm pt-7'>{data.name}</p>
    </div>
  );
};

export default Category;
