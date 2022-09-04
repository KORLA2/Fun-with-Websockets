import React from "react";
import { SliderPicker } from "react-color";

export default function DrawingTools(props) {
  return (
    <>
      <div className="row mb-4 mx-auto">
        <div className="col mr-auto">
          <button
            className="drawing-tools"
            style={{ borderRadius: "5px 0px 0px 5px" }}
            onClick={() => props.canvasRef.current.clear()}
          >
            Clear
          </button>
          <button
            className="drawing-tools"
            style={{ borderRadius: "0px 5px 5px 0px" }}
            onClick={() => props.canvasRef.current.undo()}
          >
            Undo
          </button>
        </div>
        <div className="col ml-auto">
          <label className="mr-md-2" htmlFor="Brush Radius">
            Brush Size:
          </label>
          <input
            type="range"
            name="Brush Radius"
            min="1"
            max="20"
            value={props.brushRad}
            onChange={(e) => props.setBrushRad(e.target.value)}
          />
        </div>
      </div>
      <SliderPicker
        color={props.color}
        onChangeComplete={(color) => props.setColor(color.hex)}
      />
    </>
  );
}
