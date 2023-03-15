import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import CategoryCarousel from './CategoryCarousel';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <>
      <CategoryCarousel />
      <div className=" flex border-b-2 p-4">
        <div className="hidden sm:flex w-full space-x-10 p-4">
          <div className="dropdown dropdown-bottom hover:text-pink-600">
            <label tabIndex={0} className="cursor-pointer">
              Women
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-bottom hover:text-pink-600">
            <label tabIndex={0} className="cursor-pointer">
              Men
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-bottom hover:text-pink-600">
            <label tabIndex={0} className=" cursor-pointer">
              Children
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-bottom hover:text-pink-600">
            <label tabIndex={0} className="cursor-pointer">
              Gifts
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li className="">
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md: w-full">
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Navbar;
