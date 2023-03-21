import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import New from './components/New';
import PrivateRoute from './components/PrivateRoute';
import TopBar from './components/TopBar';
import Admin from './pages/admin/Admin';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Reset from './pages/auth/Reset';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/home';
import IndexView from './pages/index';

export default function App() {
  return (
    <>
      <Router>
        <TopBar />
        <New />
        {/* <Header />
          <Navbar /> */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<IndexView />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />

          <Route
            path="/admin/*"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />

          {/* Private Routes */}
        </Routes>
        {/* <Footer /> */}
      </Router>

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
