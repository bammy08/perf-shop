import React, { useState } from 'react';
import SignUpWithGoogle from '../../components/SignUpWithGoogle';
import { sendPasswordResetEmail } from 'firebase/auth';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';

const Reset = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        setIsLoading(false);
        toast.success('Password reset email sent!');
        // ..
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
      <section>
        <h1 className="text-3xl text-center mt-6 font-bold">Reset Password</h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto bg-slate-200 mt-5 rounded-md">
          <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
            <form onSubmit={resetPassword}>
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
              <div className="relative mb-6"></div>
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
                <p>
                  <Link
                    to="/register"
                    className="text-red-500 text- hover:text-red-800 transition ease-in-out ml-1"
                  >
                    Register
                  </Link>
                </p>
              </div>
              <motion.button
                whileTap={{ scale: 0.75 }}
                type="submit"
                className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition ease-in-out"
              >
                send reset password
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

export default Reset;
