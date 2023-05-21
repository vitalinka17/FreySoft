import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Avatar, Badge } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Title from "../components/Title/Title";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Pages } from "./Navigation";

const titleMap = {
  [Pages.WALLET]: "Expenses",
  [Pages.HOME]: "Home",
};

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Box component="header">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "39px 0 36px 0",
          cursor: "pointer",
        }}
      >
        <Avatar
          sx={{ bgcolor: "secondary.main", width: "45px", padding: "4px" }}
          variant="rounded"
        >
          <PersonIcon />
        </Avatar>
        <Title text={titleMap[pathname]} />
        <Badge color="primary" overlap="circular" badgeContent=" ">
          <NotificationsNoneIcon sx={{ fontSize: "33px", cursor: "pointer" }} />
        </Badge>
      </Box>
    </Box>
  );
};
export default Header;
