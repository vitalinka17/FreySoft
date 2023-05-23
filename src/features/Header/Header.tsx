import React from "react";
import { useLocation } from "react-router-dom";
import { SxProps } from "@mui/system";
import { Box, Avatar, Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";
import Title from "../../components/Title/Title";
import { titleMap } from "../../boilerplates/titleMap/titleMap";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Box component="header">
      <Box sx={headerContainerStyled}>
        <Avatar sx={avatarStyled} variant="rounded">
          <PersonIcon />
        </Avatar>
        <Title text={titleMap[pathname]} />
        <Badge color="primary" overlap="circular" badgeContent=" ">
          <NotificationsNoneIcon sx={bellStyled} />
        </Badge>
      </Box>
    </Box>
  );
};
const headerContainerStyled: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "39px",
  cursor: "pointer",
};
const avatarStyled: SxProps = {
  backgroundColor: "secondary.main",
  width: "45px",
  padding: "4px",
};
const bellStyled: SxProps = { fontSize: "33px", cursor: "pointer" };

export default Header;
