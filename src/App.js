import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

import AuthProvider from './contexts/Auth.context';
import AuthRedirectView from './pages/auth-redirect';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Reset from './pages/auth/Reset';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/home';
import IndexView from './pages/index';
import MagicLinkView from './pages/magic-link';
import ProfileView from './pages/profile';
import SignInView from './pages/sign-in';
import SignUpView from './pages/sign-up';

export default function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<IndexView />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/auth-redirect" element={<AuthRedirectView />} />
            <Route path="/magic-link" element={<MagicLinkView />} />
            <Route path="/sign-in" element={<SignInView />} />
            <Route path="/sign-up" element={<SignUpView />} />
            {/* Private Routes */}
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfileView />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
