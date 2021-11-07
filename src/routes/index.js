import React from "react";
import { Route, Routes } from "react-router-dom";
import { Allerts, Home } from "./../pages";

const Default = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alerts" element={<Allerts />} />
    </Routes>
  );
};

export default Default;
