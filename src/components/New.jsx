import React, { useEffect, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import avatar from '../assets/avatar.png';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import ShowOnLogin, { ShowOnLogOut } from './ShowOnLogin';
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from '../redux/features/authSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { toast } from 'react-toastify';
import PrivateRoute, { PrivateRouteLink } from './PrivateRoute';
import { MdAdd } from 'react-icons/md';

const New = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const [photoURL, setPhotoURL] = useState('');
  const [pageState, setPageState] = useState('Sign in');
  const [isMenu, setIsMenu] = useState(false);
  const handleNav = () => {
    setNav(!nav);
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
  // to know if a user is signed in
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setPageState('Sign Out');
        if (user.photoURL == null) {
          setPhotoURL(avatar);
        } else {
          setPhotoURL(user.photoURL);
        }

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // The user object has basic properties such as display name, email, etc.

        // ...
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName,
            userID: user.uid,
            photoURL: user.photoURL ? user.photoURL : photoURL,
          })
        );
      } else {
        setPageState('Sign In');
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, photoURL]);

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <nav className="w-full min-h-[60px] flex justify-between items-center absolute  text-white bg-gray-700/80 sticky top-0 z-50 px-3">
      <ul className="hidden sm:flex sm:w-full font-bold mt-3">
        <li
          className={`pb-6 text-lg cursor-pointer text-center ${
            pathMatchRoute('/') && ' text-pink-700 font-bold uppercase '
          }`}
          onClick={() => navigate('/')}
        >
          Home
        </li>
        <li
          className={`pb-6 text-lg cursor-pointer text-center ${
            pathMatchRoute('/blog') && ' text-pink-700 font-semibold uppercase '
          }`}
          onClick={() => navigate('/blog')}
        >
          Blog
        </li>

        <li
          className={`pb-6 text-lg cursor-pointer text-center ${
            pathMatchRoute('/contact') &&
            ' text-pink-700 font-semibold uppercase'
          }`}
          onClick={() => navigate('/contact')}
        >
          Contact
        </li>

        <li
          className={`pb-6 text-lg cursor-pointer text-center flex items-center ${
            pathMatchRoute('/cart') && ' text-pink-700 font-semibold uppercase'
          }`}
          onClick={() => navigate('/cart')}
        >
          <BsCartFill />
          <p>(2)</p>
        </li>

        <ShowOnLogOut>
          <li className='className="pb-6 text-lg text-center"'>
            <Link to="/register">
              <button
                type="submit"
                className="text-white  bottom-2.5 bg-gray-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
              >
                Sign In
              </button>
            </Link>
          </li>
        </ShowOnLogOut>

        <ShowOnLogin>
          <li>
            <motion.div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <motion.img
                    whileTap={{ scale: 0.6 }}
                    src={photoURL ? photoURL : avatar}
                    width={30}
                    className="w-8 min-w-[40px] h-8 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                    alt="avatar"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-400 rounded-box w-52"
              >
                <li>
                  <Link to="/orders">My Orders</Link>
                </li>
                <li>
                  <li className="pb-6 text-lg text-center">
                    <button
                      type="submit"
                      className="text-white  bottom-2.5 bg-gray-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                      onClick={() => logOut()}
                    >
                      Sign Out
                    </button>
                  </li>
                </li>
              </ul>
            </motion.div>
          </li>
        </ShowOnLogin>

        <li className="pb-6 text-lg px-4 text-center  border-b-2 md:border-b-0 hover:bg-pink-900  border-pink-900  md:hover:text-pink-600 md:hover:bg-transparent transition ease-in-out duration-100">
          <PrivateRouteLink>
            <Link to="/admin/home">
              <button
                type="submit"
                className="text-white  bottom-2.5 bg-gray-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
              >
                Admin
              </button>
            </Link>
          </PrivateRouteLink>
        </li>
      </ul>

      <div className="max-w-3xl ml-1 p-2 sm:w-full text-gray-500">
        <SearchBar />
      </div>
      {/* Hamburger menu for mobile screen  */}
      <div className=" sm:hidden z-10" onClick={handleNav}>
        <BiMenu className=" ml-16 cursor-pointer" size={25} />
      </div>
      {/* Mobile screen */}
      <div>
        <div
          onClick={handleNav}
          className={
            nav
              ? 'overflow-y-hidden sm:hidden ease-in duration-300 absolute text-gray-400 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'
              : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
          }
        >
          <ul className="h-full w-full text-center pt-12">
            <li className="text-2xl py-8">
              <Link to="/">Home</Link>
            </li>
            <li className="text-2xl py-8">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="text-2xl py-8">
              <Link to="/orders">My Orders</Link>
            </li>
            <li className="text-2xl py-8">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default New;
