import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { GiPerfumeBottle } from 'react-icons/gi';
import { BsCartFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { toast } from 'react-toastify';

function Header() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success('Successfully signed out');
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="w-full  z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link to="/" className="flex items-center">
                <GiPerfumeBottle size={40} className="text-pink-600" />
                <span className="text-md md:text-lg font-semibold">
                  FavvyScent
                </span>
                <span className="text-sm md:text-lg text-pink-600 font-semibold">
                  Box
                </span>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiFillCloseCircle size={25} alt="logo" />
                  ) : (
                    <BiMenu
                      size={25}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
                <div className="dropdown dropdown-end mt-1">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <BsCartFill className="h-6 w-6" />
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex mt-1 text-gray-600">
                <li
                  className={`pb-6 text-lg cursor-pointer text-gray-600 py-2 md:px-4 text-center hover:font-semibold border-b-2 md:border-b-0  hover:bg-pink-900  hover:fon border-pink-900  md:hover:text-pink-600 md:hover:bg-transparent transition ease-in-out duration-100 ${
                    pathMatchRoute('/') &&
                    ' text-pink-700 font-semibold uppercase border-b-red-500'
                  }`}
                  onClick={() => {
                    setNavbar(!navbar);
                    navigate('/');
                  }}
                >
                  Home
                </li>
                <li
                  className={`pb-6 text-lg cursor-pointer text-gray-600 py-2 md:px-4 text-center hover:font-semibold border-b-2 md:border-b-0  hover:bg-pink-900  hover:fon border-pink-900  md:hover:text-pink-600 md:hover:bg-transparent transition ease-in-out duration-100 ${
                    pathMatchRoute('/blog') &&
                    ' text-pink-700 font-semibold uppercase border-b-red-500'
                  }`}
                  onClick={() => {
                    setNavbar(!navbar);
                    navigate('/blog');
                  }}
                >
                  Blog
                </li>
                <li
                  className={`pb-6 text-lg cursor-pointer text-gray-600 py-2 md:px-4 text-center hover:font-semibold border-b-2 md:border-b-0  hover:bg-pink-900  hover:fon border-pink-900  md:hover:text-pink-600 md:hover:bg-transparent transition ease-in-out duration-100 ${
                    pathMatchRoute('/contact') &&
                    ' text-pink-700 font-semibold uppercase border-b-red-500'
                  }`}
                  onClick={() => {
                    setNavbar(!navbar);
                    navigate('/contact');
                  }}
                >
                  Contact
                </li>
                <li className=" hidden md:flex pb-6 text-lg text-gray-600 py-2  text-center  border-b-2 md:border-b-0   hover:bg-pink-900  border-pink-900  md:hover:text-pink-600 md:hover:bg-transparent transition ease-in-out duration-100">
                  <div className="dropdown dropdown-end mt-1">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <BsCartFill className="h-6 w-6" />
                        <span className="badge badge-sm indicator-item">8</span>
                      </div>
                    </label>
                    <div
                      tabIndex={0}
                      className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                    >
                      <div className="card-body">
                        <span className="font-bold text-lg">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-block">
                            View cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={`pb-6 text-lg cursor-pointer text-gray-600 py-2 md:px-4 text-center hover:font-semibold border-b-2 md:border-b-0  hover:bg-pink-900  hover:fon border-pink-900  md:hover:text-pink-600 md:hover:bg-transparent transition ease-in-out duration-100 ${
                    pathMatchRoute('/contact') &&
                    ' text-pink-700 font-semibold uppercase border-b-red-500'
                  }`}
                  onClick={() => {
                    setNavbar(!navbar);
                    logOut();
                    navigate('/');
                  }}
                >
                  Sign Out
                </li>
                <li className="pb-6 text-lg text-white py-2 px-4 text-center  border-b-2 md:border-b-0 hover:bg-pink-900  border-pink-900  md:hover:text-pink-600 md:hover:bg-transparent transition ease-in-out duration-100">
                  <Link to="/register" onClick={() => setNavbar(!navbar)}>
                    <button className="p-2 bg-pink-700 text-white rounded-md font-semibold  hover:bg-pink-900  border-pink-900  md:hover:text-pink-600 md:hover:bg-transparent transition ease-in-out duration-100">
                      Register
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
