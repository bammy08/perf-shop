import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SignUpWithGoogle from '../../components/SignUpWithGoogle';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setIsLoading(false);
        toast.success('registration successful');
        navigate('/login');
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
        // ..
      });
  };

  return (
    <>
      {isLoading && <Loading />}
      <section className="">
        <h1 className="text-3xl text-center font-semibold mt-6">
          New to FavvySent Box?
        </h1>
        <p className="text-center mt-3 mb-3">
          By creating an account you will be able to shop faster, be up to date
          on an order’s status, and keep track of the orders you have previously
          made.
        </p>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto bg-slate-200 mt-5 rounded-md">
          {/* <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src={logo} alt="key" className="w-full rounded-2xl" />
        </div> */}
          <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
            <form onSubmit={submitForm}>
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Full name
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <BsFillPersonFill size={20} className="text-pink-700" />
                </div>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-pink-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
              >
                Your Email
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MdEmail size={20} className="text-pink-700" />
                </div>
                <input
                  type="text"
                  id="email"
                  class="bg-gray-50 border border-pink-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gamil.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
              >
                Password
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <RiLockPasswordFill size={20} className="text-pink-700" />
                </div>
                <div className="mb-6">
                  <input
                    className="bg-gray-50 border border-pink-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    autoComplete="off"
                  />
                  {showPassword ? (
                    <AiFillEyeInvisible
                      className="absolute right-3 top-3 text-xl cursor-pointer"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <AiFillEye
                      className="absolute right-3 top-3 text-xl cursor-pointer"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                </div>
              </div>

              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
                <p className="mb-6">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-blue-500 font-medium hover:text-blue-800 transition ease-in-out ml-1"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
              <motion.button
                whileTap={{ scale: 0.75 }}
                type="submit"
                className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition ease-in-out"
              >
                Register
              </motion.button>
              <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-500 after:border-t after:flex-1 after:border-gray-500">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>
              <SignUpWithGoogle />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
