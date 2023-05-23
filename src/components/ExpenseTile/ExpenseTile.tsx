import React, { FC } from "react";
import { SxProps, styled } from "@mui/system";
import { BoxContainer, Props } from "../TransactionTile/TransactionTile";
import { Avatar, Box, Typography } from "@mui/material";

const ExpenseTile: FC<Props> = ({ data }) => {
  return (
    <BoxContainer>
      {data.map(({ store, account, date, percent, total, rest, img, id }) => {
        return (
          <CardWrapper key={id}>
            <Box sx={tileContainer}>
              <Avatar src={img} alt="store" sx={avatarStyled} />
              <Box>
                <Typography sx={storeNameStyled}>{store}</Typography>
                <Typography sx={accountNameStyled}>{account}</Typography>
              </Box>
              <Typography sx={dateNameStyled}>{date}</Typography>
            </Box>
            <Typography sx={totalSpendStyled}>Total Spend</Typography>
            <Typography sx={totalSpendStyled}>Total Budget</Typography>
            <Box sx={digitsContStyled}>
              <Typography sx={totalStyled}>${total}</Typography>
              <Typography sx={restStyled}>${rest}</Typography>
              <Typography sx={percentStyled}>{percent}%</Typography>
            </Box>
            <Box sx={purpleDecorationStyled} />
          </CardWrapper>
        );
      })}
    </BoxContainer>
  );
};

const CardWrapper = styled("div")(({ theme }) => ({
  width: "360px",
  backgroundColor: theme.palette.mediumGrey.main,
  borderRadius: "10px",
  padding: "10px 15px",
}));
const tileContainer: SxProps = {
  marginBottom: "27px",
  display: "flex",
  justifyContent: "space-between",
  gap: "50px",
  alignItems: "center",
};
export const avatarStyled: SxProps = { width: 39, height: 39 };
const storeNameStyled: SxProps = {
  fontWeight: "500",
  fontSize: "16px",
};
export const accountNameStyled: SxProps = {
  fontWeight: "400",
  fontSize: "12px",
  color: "darkGrey.main",
};
const dateNameStyled: SxProps = {
  fontWeight: "400",
  fontSize: "12px",
  color: "darkGrey.main",
};
const totalSpendStyled: SxProps = {
  display: "inline",
  marginRight: "24px",
  fontWeight: "400",
  color: "darkGrey.main",
};
const digitsContStyled: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  alignItems: "center",
  margin: "16px 0",
};
const totalStyled: SxProps = {
  marginRight: "24px",
  fontWeight: "500",
  fontSize: "18px",
  color: "green.main",
};
const restStyled: SxProps = {
  color: "black.main",
  fontWeight: "500",
  fontSize: "18px",
};
const percentStyled: SxProps = {
  color: "green.main",
  fontWeight: "500",
  fontSize: "18px",
};
const purpleDecorationStyled: SxProps = {
  display: "block",
  content: `" "`,
  width: "244px",
  height: "13px",
  backgroundColor: "secondary.main",
  borderRadius: "13px",
};
export default ExpenseTile;
