import React from 'react';

const list = ['Women', 'Men', 'Children', 'Gifts'];

const CategoryCarousel = () => {
  return (
    <div className=" sm:hidden mx-auto flex flex-col justify-center max-w-sm">
      <div>
        <ul className="flex flex-row space-x-8 mt-3 p-4 overflow-y-auto">
          {list.map((item) => (
            <li key={item}>
              <button className=" w-40 p-3  bg-gray-300 rounded-md shadow-lg font-semibold">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryCarousel;
