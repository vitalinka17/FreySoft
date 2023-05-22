import React from "react";
import { Box } from "@mui/material";
import CreditCard from "../components/CreditCard/CreditCard";
import YearDropDown from "../components/YearDropDown/YearDropDown";
import Title from "../components/Title/Title";

const Home = () => {
  return (
    <Box>
      <CreditCard />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "36px 0 28px",
        }}
      >
        <Title text={"Analytics"} />
        <YearDropDown />
      </Box>
    </Box>
  );
};

export default Home;
