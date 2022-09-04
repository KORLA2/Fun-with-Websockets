import React from "react";

function Header(props) {
  const styles = { backgroundColor: "#000" };

  return (
    <>
      <div className="row current-ideas header mx-0">
        <div className="col-12">
          <h1 className="text-center">Blind Drawings!</h1>
        </div>
      </div>
      <div className="row no-gutters nav-select text-center mb-4 mx-0">
        <div className="mode-select col-sm px-0">
          <button
            style={props.selected === "Draw" ? styles : {}}
            onClick={props.handleClick}
          >
            Draw - a picture with just its description
          </button>
        </div>
        <div className="mode-select col-sm px-0">
          <button
            style={props.selected === "Draw" ? {} : styles}
            onClick={props.handleClick}
          >
            Describe - a picture with basic shapes
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
