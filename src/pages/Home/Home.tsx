import React from "react";
import CreditCards from "../../features/CreditCards/CreditCards";
import Analytics from "../../features/Analytics/Analytics";
import Transactions from "../../features/Transactions/Transactions";

const Home = () => {
  return (
    <>
      <CreditCards />
      <Analytics />
      <Transactions />
    </>
  );
};

export default Home;
