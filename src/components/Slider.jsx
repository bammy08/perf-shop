import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fifteen from '../assets/fifteen.avif';
import seventeen from '../assets/perf.jpg';
import perf from '../assets/perf-1.jpg';
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <div className=" max-w-6xl bg-gray-400 mx-auto h-96 bg-cover bg-center mt-4">
        <Slider {...settings}>
          <div className=" h-[384px] max-w-6xl mx-auto relative bg-gradient-to-r from-pink-700 to-purple-700">
            <img
              className="w-full h-full object-fill absolute"
              src={seventeen}
              alt=""
            />
            <div className="card w-96 bg-inherit shadow-xl image-full">
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[384px] max-w-6xl mx-auto relative bg-gradient-to-r from-pink-700 to-purple-700">
            <img
              className="w-full h-full object-fill absolute"
              src={fifteen}
              alt=""
            />
            <div className="card w-96 bg-inherit shadow-xl image-full">
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[384px] max-w-6xl mx-auto relative bg-gradient-to-r from-pink-700 to-purple-700">
            <img
              className="w-full h-full object-fill absolute"
              src={perf}
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
