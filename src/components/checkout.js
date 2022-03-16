import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { ShopContext } from "./ShopContext";
import { useContext } from "react";
import Product from "./Product";

function Checkout() {
  const { buy, addProduct } = useContext(ShopContext);

  return (
    <>
      {buy.map((product,id) => {
        return(
        <CheckoutProduct
          key={id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          url={product.url}
        />);
      })}
    </>
  );
}

export default Checkout;
