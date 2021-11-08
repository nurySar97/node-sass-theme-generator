import React from "react";
import { Route, Routes } from "react-router-dom";
import { ImportPage } from "../components";
import { pages } from "../template.data";
import Home from "./../pages/home";

const Default = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {pages.map((page) => {
        return (
          <Route
            key={page}
            path={`/${page}`}
            element={<ImportPage page={page} />}
          />
        );
      })}
    </Routes>
  );
};

export default Default;
