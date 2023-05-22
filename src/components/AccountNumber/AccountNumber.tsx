import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const AccountNumber: FC<{ color: string }> = ({ color }) => {
  return (
    <Box
      sx={{
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
      }}
    >
      <CreditCardIcon
        sx={{ fontSize: 33, color: `${color}.main`, opacity: "0.5" }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <Typography sx={{ fontWeight: "400", fontSize: "14px", flexGrow: 1 }}>
          Bank Account
        </Typography>
        <Typography
          sx={{
            fontWeight: "300",
            fontSize: "12px",
            color: "darkGrey.main",
            flexGrow: 2,
          }}
        >
          **** **** 1965
        </Typography>
      </Box>
    </Box>
  );
};

export default AccountNumber;
