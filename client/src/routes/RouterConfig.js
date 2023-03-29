import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages";
import { HOME } from "./CONSTANTS";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={HOME} element={<Home />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
