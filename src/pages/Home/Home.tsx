import React from "react";
import { Box } from "@mui/material";
import CreditCards from "../../features/CreditCards/CreditCards";
import Analytics from "../../features/Analytics/Analytics";
import Transactions from "../../features/Transactions/Transactions";

const Home = () => {
  return (
    <Box>
      <CreditCards />
      <Analytics />
      <Transactions />
    </Box>
  );
};

export default Home;
