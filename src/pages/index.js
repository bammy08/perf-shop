import React from 'react';
import Activities from '../components/Activities';
import CategoryCarousel from '../components/CategoryCarousel';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <Activities />
      <div className="mx-auto">
        <h1 className=" text-2xl uppercase  text-center font-semibold mt-5">
          Shop by Brands
        </h1>
        <CategoryCarousel />
      </div>
    </div>
  );
};

export default Home;
