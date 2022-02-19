import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartItems = () => {
  const dispatch = useDispatch();
  const CartItems = useSelector((state) => state.ProductReducer.cart);
  console.log(CartItems);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {CartItems.map((item) => {
        return (
          <div>
            <img src={CartItems.image} width="250px" height="250px" alt="" />
            <h3>{CartItems.title.slice(0, 20) + "..."}</h3>
            <h3>price: $ {item.price}</h3>
            <Link to="/details">
              <button>view Details</button>
            </Link>
            <button
              onClick={() => dispatch({ type: "Remove-Item", data: item })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default CartItems;
