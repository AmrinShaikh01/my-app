import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{item.title.slice(0, 20) + "..."}</h3>
      <img src={item.image} width="250px" height="250px" alt="" />
      <h3>price:${item.price}</h3>
      <button onClick={() => dispatch({ type: "Add-Cart", data: item })}>
        Add to cart
      </button>
      <Link to="/details">
        <button onClick={() => ({ type: "Selected-Item", data: item })}>
          view Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
