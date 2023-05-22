import React, { FC } from "react";
import {
  BoxContainer,
  Props,
} from "../../features/TransactionTile/TransactionTile";
import { Avatar, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ExpenseTile: FC<Props> = ({ data }) => {
  return (
    <BoxContainer>
      {data.map(({ store, account, date, percent, total, rest, img, id }) => {
        return (
          <CardWrapper key={id}>
            <Box
              sx={{
                marginBottom: "27px",
                display: "flex",
                justifyContent: "space-between",
                gap: "50px",
                alignItems: "center",
              }}
            >
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
            <Typography
              sx={{
                display: "inline",
                marginRight: "24px",
                fontWeight: "400",
                color: "darkGrey.main",
              }}
            >
              Total Spend
            </Typography>
            <Typography
              sx={{
                color: "darkGrey.main",
                display: "inline",
                fontWeight: "400",
              }}
            >
              Total Budget
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                alignItems: "center",
                margin: "16px 0",
              }}
            >
              <Typography
                sx={{
                  marginRight: "24px",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "green.main",
                }}
              >
                ${total}
              </Typography>
              <Typography
                sx={{
                  color: "black.main",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                ${rest}
              </Typography>
              <Typography
                sx={{
                  color: "green.main",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                {percent}%
              </Typography>
            </Box>
            <Box
              sx={{
                display: "block",
                content: `" "`,
                width: "244px",
                height: "13px",
                backgroundColor: "secondary.main",
                borderRadius: "13px",
              }}
            />
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

export default ExpenseTile;
