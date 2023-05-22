import React from "react";
import Calendar from "../../features/Calendar/Calendar";
import Accounts from "../../features/Accounts/Accounts";
import Expenses from "../../features/Expenses/Expenses";

const Wallet = () => {
  return (
    <>
      <Calendar />
      <Accounts />
      <Expenses />
    </>
  );
};

export default Wallet;
