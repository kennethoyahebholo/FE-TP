import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages";
import { HOME } from "./CONSTANTS";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={HOME} element={<Home />} />
        {/* 404 page */}
        {/* <Route path="*" element={<ErrorPage />} />  */}
      </Routes>
    </div>
  );
};

export default RouterConfig;
