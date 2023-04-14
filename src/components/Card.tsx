import React from "react";
import "./Card.css";


const Card = (p: any) => {
  return (
    <div className="card">
      <div className="icon"></div>
      <div>
        <p className="para1">{p.name}</p>
        <div className="input1">
          {p.price}
          <p className="green">{p.upDown}</p>
        </div>
      </div>
      <div>
        <p className="para2">Price</p>
        <div className="input2">{p.tvl}</div>
      </div>
      <div>
        <p className="para3">TVL</p>
        <div className="input3">
          <img src={p.src1} />
          <img src={p.src2} />
          <img src={p.src3} />
        </div>
      </div>
      <p className="para4">Popular pairs</p>
    </div>
  );
};

export default Card;
