import React from "react";
import { useNavigate } from "react-router-dom";
import { SxProps } from "@mui/system";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import Icon from "../../components/Icon/Icon";
import { Pages } from "../../boilerplates/Pages/Pages";

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <Box component="footer" sx={footerContainerStyled}>
      <Icon
        value={"home"}
        icon={<HomeIcon sx={fs} />}
        onPress={() => navigate(Pages.HOME)}
      />
      <Icon
        value={"CreditCard"}
        icon={<CreditCardIcon sx={fs} />}
        onPress={() => navigate(Pages.WALLET)}
      />
      <Icon
        value={"AddCircle"}
        icon={<AddCircleIcon sx={mainCircleStyled} />}
        onPress={() => console.log()}
      />
      <Icon
        value={"Calendar"}
        icon={<CalendarTodayIcon sx={fs} />}
        onPress={() => console.log()}
      />
      <Icon
        value={"Settings"}
        icon={<SettingsIcon sx={fs} />}
        onPress={() => console.log()}
      />
    </Box>
  );
};
const footerContainerStyled: SxProps = {
  borderTop: "2px solid rgba(0, 0, 0, 0.09)",
  marginTop: "7px",
  padding: "17px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const fs: SxProps = { fontSize: 27 };
const mainCircleStyled: SxProps = { color: "primary.main", fontSize: 49 };
export default NavigationBar;
