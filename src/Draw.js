import React,{Component} from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import App from './Components/App'
const Draw = ({dimensions}) => {

console.log(dimensions)
  
  return (

<App dimensions={dimensions}/>
    );
}

export default Draw
