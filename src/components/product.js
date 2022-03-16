import React, { useState } from "react";
import "./Product.css";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";

function Product({ url, title, price, rating }) {
  const {buy,addProduct} =useContext(ShopContext);
  const addHandler = () => {
    addProduct(title,price,rating,url);
  };
  return (
    <div className="product">
      <img src={url}></img>
      <p className="title">{title}</p>
      <strong>$ {price}</strong>
      <p className="rating">⭐⭐</p>
      <button className="add-button" onClick={addHandler}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
