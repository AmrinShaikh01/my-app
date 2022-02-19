import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const itemDetails = useSelector((state) => state.ProductDetails.details);
  console.log("itemDetails--->", itemDetails);
  return (
    <div>
      {itemDetails.map((item) => {
        return (
          <div>
            <h3>{item.title.slice(0, 16) + "..."}</h3>
            <img src={item.image} width="250px" height="250px" alt="" />
            <h3>price:${item.price}</h3>
            <button onClick={() => dispatch({ type: "Add-Cart", data: item })}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetails;
