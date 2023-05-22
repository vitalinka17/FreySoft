import React from "react";
import { Routes, Route } from "react-router-dom";
import Wallet from "../../pages/Wallet/Wallet";
import Home from "../../pages/Home/Home";

export enum Pages {
  HOME = "/home",
  WALLET = "/wallet",
}

const Navigation = () => {
  return (
    <Routes>
      <Route element={<Wallet />} path={Pages.WALLET}></Route>
      <Route element={<Home />} path={Pages.HOME}></Route>
      <Route element={<div>Not Found</div>} path={"*"}></Route>
    </Routes>
  );
};

export default Navigation;
