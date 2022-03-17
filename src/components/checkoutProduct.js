import React from "react";
import "./CheckoutProduct.css";


function CheckoutProduct({url,title,price,rating}) {
  let ratingStars = [];
  for(let i=0;i<rating;i++){
    ratingStars.push('⭐');
  }
  return (
    <div className="container">
      <img className="product-img" src={url}></img>
      <div className="info">
        <p className="product-title">{title}</p>
        <p className="product-price">$ {price}</p>
        <p className="product-rating">{ratingStars}</p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
