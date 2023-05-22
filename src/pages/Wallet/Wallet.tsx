import React from "react";
import Calendar from "../../components/Calendar/Calendar";
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
