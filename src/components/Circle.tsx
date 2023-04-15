import React from 'react'
import './Circle.css';
const Circle = (props:any) => {
  return (
    <div className='coin-image'>
        <img src={props.img} className='circular'/>
    </div>
  )
}

export default Circle;