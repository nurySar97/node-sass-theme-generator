import React from "react";
import Navbar from "./components/Navbar";
import Buttons from "./components/Buttons";
import ButtonsWithOutline from "./components/ButtonsWithOutline";
import ButtonGroup from "./components/ButtonGroup";
import { Allerts, Sidebar } from "./components";
// https://github.com/thomaspark/bootswatch/tree/v5/dist
// https://react-bootstrap.github.io/components/navs/

const App = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <div className="navigation">
          <Navbar />
        </div>
        <div className="content row">
          <Allerts />
          <Buttons />
          <ButtonsWithOutline />
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
};

export default App;
