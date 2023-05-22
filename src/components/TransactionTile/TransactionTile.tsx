import React, { FC } from "react";
import { styled } from "@mui/system";
import { Avatar, Box, Typography } from "@mui/material";

export type Item = {
  store: string;
  account: string;
  date: string;
  total: string;
  rest: string;
  percent: string;
  img: string;
  id: number;
};

export type Props = {
  data: Array<Item>;
};

const TransactionTile: FC<Props> = ({ data }) => {
  return (
    <BoxContainer>
      {data.map(({ store, account, date, total, img, id }) => {
        return (
          <CardWrapper key={id}>
            <Avatar src={img} alt="store" sx={{ width: 39, height: 39 }} />
            <Box>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                {store}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "darkGrey.main",
                }}
              >
                {account}
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "end",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "green.main",
                }}
              >
                ${total}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "darkGrey.main",
                }}
              >
                {date}
              </Typography>
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
}));
export default TransactionTile;
