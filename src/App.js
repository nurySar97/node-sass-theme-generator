import React from "react";
import Navbar from "./components/Navbar";


import Buttons from "./components/Buttons";
import ButtonsWithOutline from "./components/ButtonsWithOutline";
import ButtonGroup from "./components/ButtonGroup";
// https://github.com/thomaspark/bootswatch/tree/v5/dist

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="container p-3">
          <div className="row">
            <Buttons />
            <ButtonsWithOutline />
            <ButtonGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
