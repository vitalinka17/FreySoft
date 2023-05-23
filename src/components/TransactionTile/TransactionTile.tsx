import React, { FC } from "react";
import { SxProps, styled } from "@mui/system";
import { Avatar, Box, Typography } from "@mui/material";
import { Item } from "../../store/reducers/transactionsSlice";
import { accountNameStyled, avatarStyled } from "../ExpenseTile/ExpenseTile";

export type Props = {
  data: Array<Item>;
};

const TransactionTile: FC<Props> = ({ data }) => {
  return (
    <BoxContainer>
      {data.map(({ store, account, date, total, img, id }) => {
        return (
          <CardWrapper key={id}>
            <Avatar src={img} alt="store" sx={avatarStyled} />
            <Box>
              <Typography fontWeight={500}>{store}</Typography>
              <Typography sx={accountNameStyled}>{account}</Typography>
            </Box>
            <Box sx={textPositionStyled}>
              <Typography sx={totalSpanStyled}>${total}</Typography>
              <Typography sx={accountNameStyled}>{date}</Typography>
            </Box>
          </CardWrapper>
        );
      })}
    </BoxContainer>
  );
};

const CardWrapper = styled("div")(({ theme }) => ({
  width: "360px",
  height: "59px",
  display: "flex",
  justifyContent: "space-between",
  gap: "50px",
  alignItems: "center",
  backgroundColor: theme.palette.mediumGrey.main,
  borderRadius: "10px",
  padding: "5px 10px",
}));
export const BoxContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "center",
  height: "150px",
  overflow: "scroll",
}));
const totalSpanStyled: SxProps = {
  fontWeight: "500",
  fontSize: "18px",
  color: "green.main",
};
const textPositionStyled: SxProps = {
  textAlign: "end",
};
export default TransactionTile;
