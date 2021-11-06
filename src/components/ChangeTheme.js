import React from "react";
import { Button } from "reactstrap";
import { toggleTheme } from "../services/themeService";

const Default = () => {
  return (
    <React.Fragment>
      <li className="nav-item">
        <Button
          type="button"
          color="light"
          className="m-2"
          onClick={() => toggleTheme("light")}
        >
          Light
        </Button>
      </li>
      <li className="nav-item">
        <Button
          type="button"
          color="secondary"
          className="m-2"
          onClick={() => toggleTheme("dark")}
        >
          Dark
        </Button>
      </li>
    </React.Fragment>
  );
};

export default Default;
