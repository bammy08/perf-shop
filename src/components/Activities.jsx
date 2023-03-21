import React from 'react';
import women from '../assets/fourteen.avif';
import men from '../assets/ninteen.avif';
import children from '../assets/six.avif';

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-600 px-4 py-2 text-white rounded-md shadow-xl cursor-pointer hover:bg-white hover:text-purple-600 text-2xl font-bold transition ease-in duration-300">
          Women
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={women}
          alt="women"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-600 px-8 py-2 text-white rounded-md shadow-xl cursor-pointer hover:bg-white hover:text-purple-600 text-2xl font-bold transition ease-in duration-300">
          Men
        </h3>
        <img
          className="w-full h-[100%] object-cover relative border-4 border-white shadow-lg"
          src={men}
          alt="men"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-600 px-4 py-2 rounded-md shadow-xl cursor-pointer hover:bg-white hover:text-purple-600 text-white text-2xl font-bold transition ease-in duration-300">
          Children
        </h3>
        <img
          className="w-full h-[100%] object-cover relative border-4 border-white shadow-lg"
          src={children}
          alt="children"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-600 px-4 py-2 text-white rounded-md shadow-xl cursor-pointer hover:bg-white hover:text-purple-600 text-2xl font-bold transition ease-in duration-300">
          Gift sets
        </h3>
        <img
          className="w-full h-[100%] object-cover relative border-4 border-white shadow-lg"
          src={women}
          alt="women"
        />
      </div>
    </div>
  );
};

export default Activities;
