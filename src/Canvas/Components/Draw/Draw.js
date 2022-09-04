import React, { useState, useRef } from "react";

// import Header from "../Describe/Header";
// 
// import Intro from "./Intro";

import CanvasDraw from "react-canvas-draw";


import DrawingTools from "./DrawingTools";

function Draw(props) {

  const canvasRef = useRef();

  const [brushRad, setBrushRad] = useState(5);

  const [color, setColor] = useState("#444");

  return (
    <div className="container">

      <div className="single-prompt-app App">
    
        <div className="mx-4">
        
          <DrawingTools

            brushRad={brushRad}
            setBrushRad={setBrushRad}
            color={color}
            setColor={setColor}
            canvasRef={canvasRef}

          />
    
          <CanvasDraw
    
            ref={canvasRef}
            canvasWidth={"100%"}
            canvasHeight={500}
            brushRadius={brushRad}
            brushColor={color}
          />
        </div>
      </div>
    </div>
  );
}

export default Draw;
