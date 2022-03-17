import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { ShopContext } from "./ShopContext";
import { useContext } from "react";
import Product from "./Product";
import "./checkout.css";

function Checkout() {
  const { buy, addProduct } = useContext(ShopContext);
  let Total = 0;
  buy.forEach((element) => {
    Total += element.price;
  });

  return (
    <>
      <div className="checkout-items">
        <div className="checkout-products">
          {buy.map((product, id) => {
            return (
              <CheckoutProduct
                key={id}
                id={id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                url={product.url}
              />
            );
          })}
        </div>
        <div className="total-container">
          <h5>Total : {Total}</h5>
          <button className="pay-button">Pay</button>
        </div>
      </div>
      {buy.length < 1 && <h5 className="no-item">Basket is Empty!</h5>}
    </>
  );
}

export default Checkout;
