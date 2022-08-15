import React from 'react'
import { useEffect } from 'react';

const Draw = ({size}) => {
  var can,ctx,x=0,y=0,prevx=0,prevy=0;
    console.log(size)
    useEffect(()=>{

 can = document.getElementById("can");
      ctx = can.getContext("2d");
      console.log(ctx)
      can.height = 300;
      can.width = size;
},[])


  return (
<canvas id='can'    onMouseMove={(e)=>{
prevx=x;
prevy=y;
x=e.clientX;
y=e.clientY;
if(ctx){

ctx.moveTo(prevx,prevy)
ctx.lineTo(x,y);
ctx.stroke();
ctx.strokeStyle='black'
ctx.lineWidth=2;

}
}}  style={{height:'300px'}}>



</canvas>
  )
}

export default Draw
