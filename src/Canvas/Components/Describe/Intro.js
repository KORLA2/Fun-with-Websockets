import React from "react";

function HeaderAndIntro(props) {
  return (
    <div className="px-4">
      <p>
        Choose a random object and{" "}
        <strong>
          describe what it looks like. BUT you can only use basic geometric
          shapes.
        </strong>{" "}
        Example for a door: "Draw a rectangle with a little circle in the middle
        right"
      </p>
      <hr />
    </div>
  );
}

export default HeaderAndIntro;
