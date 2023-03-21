import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { selectPhotoURL, selectUserName } from '../../redux/features/authSlice';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const photoUrl = useSelector(selectPhotoURL);

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="flex flex-col w-60 ">
      <div className=" bg-neutral-500 text-white w-full p-3 flex flex-col items-center gap-3">
        {userName}
        <img src={photoUrl} alt="" />
      </div>
      <nav>
        <ul>
          <li
            className={`text-lg cursor-pointer text-center bg-white border-b-2 border-red-200 shadow-2xl ${
              pathMatchRoute('/admin/home') &&
              ' text-pink-700 font-bold uppercase '
            }`}
            onClick={() => navigate('/admin/home')}
          >
            Home
          </li>
          <li
            className={`text-lg cursor-pointer text-center bg-white border-b-2 border-red-200 ${
              pathMatchRoute('/admin/view-products') &&
              ' text-pink-700 font-bold uppercase '
            }`}
            onClick={() => navigate('/admin/view-products')}
          >
            View Products
          </li>
          <li
            className={`text-lg cursor-pointer text-center border-b-2 border-red-200 bg-white ${
              pathMatchRoute('/admin/add-product') &&
              ' text-pink-700 font-bold uppercase '
            }`}
            onClick={() => navigate('/admin/add-product')}
          >
            Add Product
          </li>
          <li
            className={`text-lg cursor-pointer text-center border-b-2 border-red-200 bg-white ${
              pathMatchRoute('/admin/orders') &&
              ' text-pink-700 font-bold uppercase '
            }`}
            onClick={() => navigate('/admin/orders')}
          >
            Orders
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
