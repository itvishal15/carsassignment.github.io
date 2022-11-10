import React from "react";
import "./Mycard.css";

const Mycard = (props) => {
  return (
    <>
      {props.fitem.map((val) => {
        const {bodyType, modelName, modelType, imageUrl } = val;

        return (
          <div className="mycard">
            <p className="type"> {bodyType} </p>
            <div className="details">
              <h2 className="id"> {modelName} </h2>
              <span>
                <p className="type2"> {modelType} </p>
              </span>
            </div>
            <div className="img-div">
              <img className="image" src={imageUrl} alt="imgg" />
            </div>
            <div className="button">
              <a href="`https://learn/${id}/`" target="_blank">
                <button className="btn">
                  LEARN <span className="arrow">&gt;</span>{" "}
                </button>
              </a>

              <a href="`https://shop/${id}/`" target="_blank">
                <button className="btn">
                  SHOP <span className="arrow">&gt;</span>
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Mycard;
