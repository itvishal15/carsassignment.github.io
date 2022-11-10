import "./App.css";
import React, { useState } from "react";
import Imagecarousel from "./Components/Imagecarousel";
import Cars from "./api/Cars.json";

function App() {
  const [items, setItems] = useState(Cars);
  const filterItem = (btype) => {
    const updatedItems = Cars.filter((currEle) => {
      return currEle.bodyType === btype;
    });
    setItems(updatedItems);
  };
  return (
    <div className="main-div">
      <div className="container">
        <Imagecarousel item1={items} />
        <div className="btns">
          <button className="btn-dec" onClick={() => filterItem("suv")}>
            SUV
          </button>
          <button className="btn-dec" onClick={() => filterItem("estate")}>
            ESTATE
          </button>
          <button className="btn-dec" onClick={() => filterItem("sedan")}>
            SEDAN
          </button>
          <button className="btn-dec" onClick={() => setItems(Cars)}>
            ALL
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
