import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationBar = ({ setText }) => {
  const CartItems = useSelector((state) => state.productReducer.cart);
  return (
    <div>
      <Link to="">reduxapp</Link>
      <input type="search" onChange={(e) => setText(e.target.value)} />
      <button>search</button>
      <Link to="/cart">cart:{CartItems.length}</Link>
    </div>
  );
};

export default NavigationBar;
