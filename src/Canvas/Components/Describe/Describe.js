import React, { useState } from "react";
import Intro from "./Intro";
import Header from "./Header";
import { randomObjects } from "../../data/data";

export default function Describe(props) {
  const random =
    randomObjects[Math.round(Math.random() * (randomObjects.length - 1))];
  const [object, setObject] = useState(random);

  const handleShuffle = () => {
    const random =
      randomObjects[Math.round(Math.random() * (randomObjects.length - 1))];
    setObject(random);
  };

  return (
    <div className="container">
      <div className="App">
        <Header handleClick={props.handleClick} selected={"Describe"} />
        <Intro />
        <div className="row mx-auto">
          <div className="col-12 col-md-3 ml-auto mb-2">
            <button className="shuffle-button" onClick={handleShuffle}>
              Shuffle
            </button>
          </div>
          <div className="col-12 col-md-6 mr-auto text-md-left">
            <h5>Your random object is: {object}</h5>
            <p>
              Here's an{" "}
              <a
                target="_blank"
                href={`https://www.google.com/search?q=${object.replace(
                  / /g,
                  "+"
                )}&tbm=isch`}
              >
                image
              </a>{" "}
              of what it looks like
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
