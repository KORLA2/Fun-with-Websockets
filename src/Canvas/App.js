import React, { useState,useEffect } from "react";
import Describe from "./Components/Describe/Describe";
import Draw from "./Components/Draw/Draw";

function App() {
  const [drawer, setDrawer] = useState(true);


  return (
    <>
      {drawer && <Draw handleClick={ (e) => {
    if (e.target.innerText.includes("Describe")) {
      setDrawer(false);
    } else {
      setDrawer(true);
    }
  } } />}
      {
        !drawer && <Describe handleClick={ (e) => {
    if (e.target.innerText.includes("Describe")) {
      setDrawer(false);
    } else {
      setDrawer(true);
    }
        }
    } />}
    </>
  );
}

export default App;
