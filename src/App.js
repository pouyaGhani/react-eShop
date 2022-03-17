import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContext } from "./components/ShopContext";
import { useState } from "react";

function App() {

  const [buy, setBuy] = useState([]);
  const addProduct = (title,price,rating,url)=>{
    setBuy(old => [...old,{title:title,price:price,rating:rating,url:url}]);
  }
  const removeProduct = (id) =>{
    let newProducts=buy.filter((product,index) => index != id)
    setBuy(newProducts);
    console.log(newProducts);
  }
  return (
    <Router>
      <ShopContext.Provider value={{buy,addProduct,removeProduct}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </ShopContext.Provider>
    </Router>
  );
}

export default App;
