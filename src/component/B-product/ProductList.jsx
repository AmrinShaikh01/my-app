import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./productCard";
import { useDispatch, useSelector } from "react-redux";

const ProductList = ({ text }) => {
  const allproducts = useSelector((state) => state.productReducer.products);
  console.log("allProd", allproducts);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  console.log(products);
  const getProduct = async () => {
    const apiData = await axios.get("http://fakestoreapi.com/products");
    console.log("apiData", apiData.data);
    allproducts.length === 0 &&
      dispatch({ type: "Add-Products", data: apiData.data });
    setProducts(apiData.data);
  };
  useEffect(() => {
    const filtered = allproducts.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setProducts(filtered);
  }, [text]);
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((item) => {
        return <ProductCard item={item} />;
      })}
    </div>
  );
};

export default ProductList;
