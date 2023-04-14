import React from "react";
import Circle from "./Circle";
import Card from "./Card";
import './Shared.css';

const Shared = (props:any) => {
  return (
    <div className="wrapper">
      <Circle img={props.img}/>
      <Card name={props.name} price={props.price} upDown={props.upDown} tvl={props.tvl} src1={props.src1}
        src2={props.src2}
        src3={props.src3}/>
    </div>
  );
};

export default Shared;
