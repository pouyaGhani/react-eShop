import React from "react";
import "./product.css";

function product({url,title,price,rating}) {
  return (
    <div>
      <img src={url}></img>
      <p className="title">{title}</p>
      <strong>$ {price}</strong>
      <p className="rating">⭐⭐</p>
    </div>
  );
}

export default product;
