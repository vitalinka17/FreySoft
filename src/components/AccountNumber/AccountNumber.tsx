import React, { FC } from "react";
import { SxProps } from "@mui/system";
import { Box, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const AccountNumber: FC<{ color: string }> = ({ color }) => {
  return (
    <Box sx={containerStyled}>
      <CreditCardIcon sx={creditCardStyled({ color })} />
      <Box sx={wrapperStyled}>
        <Typography sx={accountNameStyled}>Bank Account</Typography>
        <Typography sx={cardNumberStyled}>**** **** 1965</Typography>
      </Box>
    </Box>
  );
};
const containerStyled: SxProps = {
  padding: "15px",
  backgroundColor: "mediumGrey.main",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
  position: "absolute",
  borderRadius: "10px 10px 0px 0px",
  top: "105px",
  width: "140px",
  left: 0,
};

interface CreditCardStyledProps {
  color: string;
}
const creditCardStyled = (props: CreditCardStyledProps): SxProps => ({
  fontSize: 33,
  color: `${props.color}.main`,
  opacity: "0.5",
});
const wrapperStyled: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};
const accountNameStyled: SxProps = {
  fontWeight: "400",
  fontSize: "14px",
  flexGrow: 1,
};
const cardNumberStyled: SxProps = {
  fontWeight: "300",
  fontSize: "12px",
  color: "darkGrey.main",
  flexGrow: 2,
};
export default AccountNumber;
