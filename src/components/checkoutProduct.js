import React from "react";
import "./CheckoutProduct.css";
import {ShopContext} from './ShopContext'
import { useContext } from "react";


function CheckoutProduct({url,title,price,rating,id}) {
  let ratingStars = [];
  const {buy,removeProduct} = useContext(ShopContext);
  for(let i=0;i<rating;i++){
    ratingStars.push('⭐');
  }

  const clickHandler = () =>{
    removeProduct(id);
  }
  return (
    <div className="container">
      <img className="product-img" src={url}></img>
      <div className="info">
        <p className="product-title">{title}</p>
        <p className="product-price">$ {price}</p>
        <p className="product-rating">{ratingStars}</p>
        <button className="remove-product" onClick={clickHandler}>Remove</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
