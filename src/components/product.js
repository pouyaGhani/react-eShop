import React, { useState } from "react";
import "./Product.css";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";

function Product({ url, title, price, rating ,toggleHandler}) {
  const {buy,addProduct} =useContext(ShopContext);
  let ratingStars = [];
  for(let i=0;i<rating;i++){
    ratingStars.push('⭐');
  }
  const addHandler = () => {
    addProduct(title,price,rating,url);
    toggleHandler();
  };
  return (
    <div className="product">
      <img src={url}></img>
      <p className="title">{title}</p>
      <strong>$ {price}</strong>
      <p className="rating">{ratingStars}</p>
      <button className="add-button" onClick={addHandler}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
