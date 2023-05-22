import React from "react";
import { Box, Paper, Card, CardContent, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const CreditCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Paper
        elevation={3}
        variant="outlined"
        sx={{
          backgroundColor: "secondary.main",
          width: "285px",
          height: "149px",
          borderRadius: "24px",
          position: "absolute",
          zIndex: "-1",
          bottom: "100px",
        }}
      />
      <Card
        sx={{
          backgroundColor: "deepBlue.main",
          width: "360px",
          padding: "10px",
          borderRadius: "24px",
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <MoreHorizIcon sx={{ color: "white.main" }} fontSize="medium" />
          </Box>
          <Typography
            sx={{ fontWeight: "500", fontSize: "18px" }}
            color="white.main"
            gutterBottom
          >
            Total Balance
          </Typography>
          <Typography
            variant="h5"
            component="span"
            color="white.main"
            sx={{ fontWeight: "700", fontSize: "30px", lineHeight: "35px" }}
          >
            $78,567.00
          </Typography>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "44px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "18px",
              }}
              color="darkGrey.main"
            >
              2444 3456 4578 4909
            </Typography>
            <CircleIcon sx={{ fontSize: "29px", color: "#FF9F00" }} />
            <CircleIcon
              sx={{
                fontSize: "29px",
                color: "rgba(255, 0, 21, 0.84)",
                position: "absolute",
                right: "14px",
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreditCard;
