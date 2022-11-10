import React from "react";
import Mycard from "./Mycard.js";
import "./Imagecarousel.css";

const Imagecarousel = (props) => {
  let box = document.querySelector(".product-container");

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width; 
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <>
      <div className="product-carousel">
        <button className="pre-btn" onClick={btnpressprev}>
          <p>&lt;</p>
        </button>
        <button className="next-btn" onClick={btnpressnext}>
          <p>&gt;</p>
        </button>

        <div className="product-container">
          <Mycard fitem={props.item1} />
        </div>
      </div>
    </>
  );
};

export default Imagecarousel;
