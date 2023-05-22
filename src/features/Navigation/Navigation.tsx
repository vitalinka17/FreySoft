import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Wallet from "../../pages/Wallet/Wallet";
import Home from "../../pages/Home/Home";

export enum Pages {
  HOME = "/home",
  WALLET = "/wallet",
  DEFAULT = "/",
}

const Navigation = () => {
  return (
    <Routes>
      <Route element={<Wallet />} path={Pages.WALLET}></Route>
      <Route element={<Home />} path={Pages.HOME}></Route>
      <Route
        element={<Navigate to={Pages.HOME} />}
        path={Pages.DEFAULT}
      ></Route>
      <Route element={<div>Not Found</div>} path={"*"}></Route>
    </Routes>
  );
};

export default Navigation;
