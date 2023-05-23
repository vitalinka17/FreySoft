import React from "react";
import { SxProps } from "@mui/system";
import { Box, Paper, Card, CardContent, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { amountStyled, balanceNameStyled } from "../BankAccount/BankAccount";

const CreditCard = () => {
  return (
    <Box sx={creditCardWrapperStyled}>
      <Paper elevation={3} variant="outlined" sx={paperWrapperStyled} />
      <Card sx={cardWrapperStyled}>
        <CardContent>
          <Box sx={endPositionStyled}>
            <MoreHorizIcon sx={{ color: "white.main" }} fontSize="medium" />
          </Box>
          <Typography sx={balanceNameStyled} color="white.main" gutterBottom>
            Total Balance
          </Typography>
          <Typography
            variant="h5"
            component="span"
            color="white.main"
            sx={amountStyled}
          >
            $78,567.00
          </Typography>
          <Box sx={creditCardContainerStyled}>
            <Typography sx={cardNumberStyled} color="darkGrey.main">
              2444 3456 4578 4909
            </Typography>
            <CircleIcon sx={orangeCircleStyled} />
            <CircleIcon sx={redCircleStyled} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
const creditCardWrapperStyled: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const paperWrapperStyled: SxProps = {
  backgroundColor: "secondary.main",
  width: "285px",
  height: "149px",
  borderRadius: "24px",
  position: "absolute",
  zIndex: "-1",
  bottom: "100px",
};
const cardWrapperStyled: SxProps = {
  backgroundColor: "deepBlue.main",
  width: "360px",
  padding: "10px",
  borderRadius: "24px",
};
const endPositionStyled: SxProps = {
  display: "flex",
  justifyContent: "flex-end",
};
const creditCardContainerStyled: SxProps = {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "44px",
};
const cardNumberStyled: SxProps = {
  fontWeight: "500",
  fontSize: "18px",
};
const orangeCircleStyled: SxProps = { fontSize: "29px", color: "#FF9F00" };
const redCircleStyled: SxProps = {
  fontSize: "29px",
  color: "rgba(255, 0, 21, 0.84)",
  position: "absolute",
  right: "14px",
};

export default CreditCard;
