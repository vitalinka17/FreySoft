import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import Icon from "../../components/Icon/Icon";
import { Pages } from "../Navigation/Navigation";

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "2px solid rgba(0, 0, 0, 0.09)",
        marginTop: "7px",
        padding: "17px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Icon
        value={"home"}
        icon={<HomeIcon sx={{ fontSize: 27 }} />}
        onPress={() => navigate(Pages.HOME)}
      />
      <Icon
        value={"CreditCard"}
        icon={<CreditCardIcon sx={{ fontSize: 27 }} />}
        onPress={() => navigate(Pages.WALLET)}
      />
      <Icon
        value={"AddCircle"}
        icon={<AddCircleIcon sx={{ color: "primary.main", fontSize: 49 }} />}
        onPress={() => console.log()}
      />
      <Icon
        value={"Calendar"}
        icon={<CalendarTodayIcon sx={{ fontSize: 27 }} />}
        onPress={() => console.log()}
      />
      <Icon
        value={"Settings"}
        icon={<SettingsIcon sx={{ fontSize: 27 }} />}
        onPress={() => console.log()}
      />
    </Box>
  );
};

export default NavigationBar;
