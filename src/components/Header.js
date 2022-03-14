import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { color, padding } from "@mui/system";

export default function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <ShoppingCartIcon
          fontSize="large"
          style={{ color: "#6e6e6e", padding: "5px" }}
        ></ShoppingCartIcon>
        <p>shop</p>
      </div>
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

      <div className="basket">
        <ShoppingBasketIcon style={{ color: "#6e6e6e" }} />
        <p>0</p>
      </div>
    </div>
  );
}