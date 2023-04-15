import React from "react";
import "./Card.css";


const Card = (props : any) => {
  return (
    <div className="card">
      <div className="coin-icon"></div>
      <div>
        <p>{props.name}</p>
        <div className="price">
          {props.price}
          <p className="inc-dec">{props.upDown}</p>
        </div>
      </div>
      <div>
        <p>Price</p>
        <div className="tvl">{props.tvl}</div>
      </div>
      <div>
        <p>TVL</p>
        <div className="popular-pairs">
          <img src={props.src1} alt="coin"/>
          <img src={props.src2} alt="coin"/>
          <img src={props.src3} alt="coin"/>
        </div>
      </div>
      <p>Popular pairs</p>
    </div>
  );
};

export default Card;
