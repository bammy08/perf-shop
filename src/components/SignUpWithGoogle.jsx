import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUpWithGoogle = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const onGoogleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        toast.success('Login successful');
        navigate('/');

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        toast.error(error.message);
        // ..
      });
  };
  return (
    <motion.button
      whileTap={{ scale: 0.75 }}
      type="button"
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
      onClick={onGoogleClick}
    >
      <FcGoogle className="text-2xl  bg-white rounded-full mr-2" />
      Continue with Google
    </motion.button>
  );
};

export default SignUpWithGoogle;
