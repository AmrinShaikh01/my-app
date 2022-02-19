import React, { useState } from "react";
import NavigationBar from "../A-navigation/NavigationBar";
import ProductList from "../B-product/ProductList";
import CartItems from "../C-Cart/CartItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../D-Details/ProductDetails";
const Landing = () => {
  const [text, setText] = useState(" ");
  return (
    <div>
      <BrowserRouter>
        <NavigationBar setText={setText} />
        <Routes>
          <Route path="/" element={<ProductList text={text} />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/details" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
