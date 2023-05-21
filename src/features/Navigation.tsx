import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Navigation = () => {
  return (
    <Routes>
      <Route element={<div></div>} path={"/home"}></Route>
      <Route element={<div></div>} path={"/wallet"}></Route>
      <Route element={<Navigate to={"/home"} />} path={"/"}></Route>
      <Route element={<div>Not Found</div>} path={"*"}></Route>
    </Routes>
  );
};

export default Navigation;
