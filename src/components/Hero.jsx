import React from 'react';
import { motion } from 'framer-motion';
import perf from '../assets/perf-11.jpg';

const Hero = () => {
  return (
    <div className="w-full h-[80vh]">
      <img className="w-full h-full object-cover relative" src={perf} alt="" />
      <div className=" max-w-[1140px] m-auto">
        <div className=" absolute top-[30%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="  text-xl md:font-bold md:text-4xl">
            Smell is a word
          </h1>
          <h1 className=" text-xl md:font-bold md:text-4xl">
            Perfume is Literature
          </h1>

          <p className=" italic mt-3">
            Perfume is indispensable in our busy life. <br /> Use fragrance to
            refresh your mind
          </p>
        </div>
        <button className="absolute top-[70%] ml-4">Explore Now</button>
      </div>
    </div>
  );
};

export default Hero;
