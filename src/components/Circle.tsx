import React from 'react'
import './Circle.css';
// import BitcoinSV1 from '../assets/images/BitcoinSV1.png';

const Circle = (p:any) => {
  return (
    <div className='outerRadius'>
        <img src={p.img} className='circular'/>
    </div>
  )
}

export default Circle