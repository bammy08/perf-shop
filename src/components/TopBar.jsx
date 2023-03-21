import React from 'react';
import { GiPerfumeBottle } from 'react-icons/gi';
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';

const TopBar = () => {
  return (
    <div className=" flex justify-between items-center px-4 py-2 ">
      <div className="flex items-center">
        <GiPerfumeBottle size={35} className="text-pink-600" />
        <h1 className="text-xl text-gray-400 font-bold">
          FavvyScent
          <span className="text-xl text-pink-600">Box</span>
        </h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={20} className="mr-2 text-pink-900" />
          <p>7AM -11PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-pink-900" />
          <p>+234-813-691-3387</p>
        </div>
        <button className="">Place an Order</button>
      </div>
    </div>
  );
};

export default TopBar;
