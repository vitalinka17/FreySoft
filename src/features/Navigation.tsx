import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Wallet from "../pages/Wallet";

export enum Pages {
  HOME = "/home",
  WALLET = "/wallet",
}

const Navigation = () => {
  return (
    <Routes>
      <Route element={<Wallet />} path={Pages.WALLET}></Route>
      <Route element={<Navigate to={Pages.HOME} />} path={"/"}></Route>
      <Route element={<div>Not Found</div>} path={"*"}></Route>
    </Routes>
  );
};

export default Navigation;
