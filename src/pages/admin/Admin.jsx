import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProduct from '../../components/admin/AddProduct';
import Home from '../../components/admin/Home';
import Navbar from '../../components/admin/Navbar';
import Orders from '../../components/admin/Orders';
import ViewProducts from '../../components/admin/ViewProducts';

const Admin = () => {
  return (
    <div className="flex flex-row   w-full overflow-hidden">
      <div className="bg-pink-300 border-2 border-blue-500">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="add-product/:id" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="view-products" element={<ViewProducts />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
