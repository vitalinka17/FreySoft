import React, { FC } from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import AccountNumber from "../AccountNumber/AccountNumber";
import { SxProps } from "@emotion/react";

const BankAccount: FC<{ color: string }> = ({ color }) => {
  return (
    <>
      <BoxSubstrate color={color}>
        <Typography sx={balanceNameStyled}>Total Balance</Typography>
        <Typography sx={amountStyled}>$76,22.00</Typography>
        <AccountNumber color={color} />
      </BoxSubstrate>
    </>
  );
};
interface BoxProps {
  color: string;
}
const BoxSubstrate = styled("div")<BoxProps>(({ theme, color }) => ({
  backgroundColor: theme.palette?.[color]?.main,
  padding: "22px",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  alignItems: "start",
  position: "relative",
}));
export const balanceNameStyled: SxProps = {
  fontWeight: "500",
  fontSize: "17px",
  color: "white.main",
};
export const amountStyled: SxProps = {
  fontWeight: "700",
  fontSize: "28px",
  color: "white.main",
};
export default BankAccount;
