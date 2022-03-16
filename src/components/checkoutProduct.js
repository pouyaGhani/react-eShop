import React from "react";
import "./CheckoutProduct.css";


function CheckoutProduct({url,title,price,rating}) {

  return (
    <div className="container">
      <img className="product-img" src={url}></img>
      <div className="info">
        <p className="product-title">{title}</p>
        <p className="product-price">$ {price}</p>
        <p className="product-rating">⭐⭐⭐</p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
