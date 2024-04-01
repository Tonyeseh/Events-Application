import React from "react";
import Category from "./Category";

const CategorySection = () => {
  return (
    <div className='mx-20 my-10'>
      <h1 className='font-bold text-xl pb-7'>Explore Categories</h1>
      <div className='flex flex-wrap gap-20 justify-between items-center'>
        <Category
          data={{
            name: "Entertainment",
          }}
        />

        <Category
          data={{
            name: "Educational & Business",
          }}
        />

        <Category
          data={{
            name: "Cultural & Arts",
          }}
        />

        <Category
          data={{
            name: "Sports & Fitness",
          }}
        />

        <Category
          data={{
            name: "Technology & Innovation",
          }}
        />

        <Category
          data={{
            name: "Travel & Adventure",
          }}
        />
      </div>
    </div>
  );
};

export default CategorySection;
