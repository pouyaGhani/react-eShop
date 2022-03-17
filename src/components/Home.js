import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [classState, setClassState] = useState("hidden");
  let classs='';
  const toggleHandler = () => {
    setTimeout(() => {
      setClassState('alert-message');
      setTimeout(() => {
        setClassState('hidden');
      },3000);
    },10);
  };
  return (
    <div>
      <div className="img-container" style={{ height: "400px" }}>
        <img
          src="https://en.lining.com/lib/img/home/wow.jpg"
          alt="is not here"
          style={{ width: "100%" }}
        ></img>

        <h1>products</h1>

        <div className="row-one">
          <Product
            url="https://www.banimode.com/633484/57704.jpg"
            title="lebase jean zanane"
            price={230000}
            rating="1"
            toggleHandler={toggleHandler}
          />
          <Product
            url="https://www.banimode.com/635196/57621.jpg"
            title="poliver jean zanane"
            price={450000}
            rating="3"
            toggleHandler={toggleHandler}
          />
          <Product
            url="https://www.banimode.com/664919/61455.jpg"
            title="shalvar jean zanane"
            price={130000}
            rating="4"
            toggleHandler={toggleHandler}
          />
        </div>
        <div className="row-two">
          <Product
            url="https://www.banimode.com/567149/49478.jpg"
            title="T-shirt chiriki mardane"
            price={770000}
            rating="5"
            toggleHandler={toggleHandler}
          />
          <Product
            url="https://www.banimode.com/556868/48683.jpg"
            title="pirahan mardane"
            price={170000}
            rating="2"
            toggleHandler={toggleHandler}
          />
          <Product
            url="https://www.banimode.com/655591/60362.jpg"
            title="shalvar jean mardane"
            price={860000}
            rating="3"
            toggleHandler={toggleHandler}
          />
        </div>
      </div>
      <div className={classState}>
        <p>Added Successfuly</p>
      </div>
    </div>
  );
}

export default Home;
