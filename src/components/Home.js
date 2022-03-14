import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div
        className="img-container"
        style={{ height: "400px", overflow: "hidden" }}
      >
        <img
          src="https://en.lining.com/lib/img/home/wow.jpg"
          alt="is not here"
          style={{ width: "100%" }}
        ></img>
      </div>
    </div>
  );
}

export default Home;
