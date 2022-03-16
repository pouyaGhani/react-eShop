import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext";
import { useContext } from "react";

export default function Header() {
  const {buy,addProduct} = useContext(ShopContext);
  return (
    <div className="Header">
      <Link to={'/'} style={{textDecoration:'none'}}>
        <div className="logo">
          <ShoppingCartIcon
            fontSize="large"
            style={{ color: "#6e6e6e", padding: "5px" }}
          ></ShoppingCartIcon>
          <h4>shop</h4>
        </div>
      </Link>
      <div className="search-input">
        <input type="text" placeholder="search..."></input>
        <SearchIcon
          fontSize="medium"
          style={{
            backgroundColor: "#d4d4d4",
            borderRadius: "2px",
            padding: "3px",
          }}
        />
      </div>

      <div className="signin-container">
        <small>Hello guest</small>
        <strong>sign in</strong>
      </div>

      <div className="your-shop">
        <small>your</small>
        <strong>shop</strong>
      </div>
      
      <Link to={'/checkout'} style={{textDecoration:'none'}}>
        <div className="basket">
          <ShoppingBasketIcon style={{ color: "#6e6e6e" }} />
          <p>{buy.length}</p>
        </div>
      </Link>
      
    </div>
  );
}
