import React from "react";
import { useStore } from "../hooks";
import ChangeTheme from "./change-theme";

const Default = (props) => {
  const { toggleSidebar } = useStore();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          onClick={toggleSidebar}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">{/* <ChangeTheme /> */}</ul>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Default;
