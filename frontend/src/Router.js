import {Routes, Route} from "react-router-dom";
import React from 'react';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Products from './screens/Products';
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Payment from "./screens/Payment";
import DashBoard from "./screens/Dashboard";
import NotFound from './screens/NotFound';

function Router() {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Router