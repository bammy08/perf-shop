import React from 'react';
import armani from '../assets/armani.png';
import burb from '../assets/burberry.png';
import bvg from '../assets/bvlgari.png';
import chanel from '../assets/chanel.png';
import ck from '../assets/ck.png';
import dolce from '../assets/dolce.png';
import guci from '../assets/gucci.png';
import malone from '../assets/malone.png';
import marc from '../assets/marc.png';
import paco from '../assets/paco.png';
import raph from '../assets/raph.png';
import tom from '../assets/tom.png';
import versace from '../assets/versace.png';
import ysl from '../assets/ysl.png';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const CategoryCarousel = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 1000;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 1000;
  };
  return (
    <>
      <div className="relative flex items-center mt-5">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
          onClick={slideLeft}
        />

        <div
          id="slider"
          className="flex gap-16 overflow-x-scroll scroll whitespace-nowrap w-full h-full scroll-smooth no-scrollbar"
        >
          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-32 p-3 mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={armani}
                alt="images"
              />
            </button>
          </div>

          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-32 p-2 mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={burb}
                alt="images"
              />
            </button>
          </div>

          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-44 p-[2.1rem] mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={bvg}
                alt="images"
              />
            </button>
          </div>

          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-24 p-3  mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={chanel}
                alt="images"
              />
            </button>
          </div>

          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-36 mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={ck}
                alt="images"
              />
            </button>
          </div>

          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-38 mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={dolce}
                alt="images"
              />
            </button>
          </div>

          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-32 mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={guci}
                alt="images"
              />
            </button>
          </div>

          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-36 mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={malone}
                alt="images"
              />
            </button>
          </div>
          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-36 mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={marc}
                alt="images"
              />
            </button>
          </div>
          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-40 p-[30px] mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={paco}
                alt="images"
              />
            </button>
          </div>
          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-40 p-[25px] mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={raph}
                alt="images"
              />
            </button>
          </div>
          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-32 p-2 mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={tom}
                alt="images"
              />
            </button>
          </div>
          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-36 mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={versace}
                alt="images"
              />
            </button>
          </div>
          <div>
            <button className=" w-60 bg-red-300 rounded-md">
              <img
                className=" w-36 p-2 mx-auto cursor-pointer hover:scale-105 ease-out duration-300"
                src={ysl}
                alt="images"
              />
            </button>
          </div>
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default CategoryCarousel;
