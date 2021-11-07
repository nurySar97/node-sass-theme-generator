import React from "react";
import { Row } from "react-bootstrap";
import { Navbar, Preloader, Sidebar } from "./components";

// https://github.com/thomaspark/bootswatch/tree/v5/dist
// https://react-bootstrap.github.io/components/navs/

const App = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="main">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="body">
            <div className="navigation">
              <Navbar />
            </div>
            <Row className="content"></Row>
          </div>
        </div>
      </div>
      <Preloader/>
    </React.Fragment>
  );
};

export default App;
