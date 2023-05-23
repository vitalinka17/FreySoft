import React from "react";
import { SxProps } from "@mui/system";
import { Box } from "@mui/material";
import BankAccount from "../../components/BankAccount/BankAccount";

const Accounts = () => {
  return (
    <Box sx={accountsWrapper}>
      <BankAccount color={"secondary"} />
      <BankAccount color={"primary"} />
    </Box>
  );
};
const accountsWrapper: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
};
export default Accounts;
