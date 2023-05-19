import { createTheme, colors, Theme } from "@mui/material";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#007042",
    },
    secondary: {
      main: colors.green[800],
    },
    // @ts-ignore
    lightgrey: { main: "#D3D7DA" },
    mediumgrey: { main: "#A0A9AF" },
    darkgrey: { main: "rgba(33, 39, 40, 0.6)" },
    graphite: { main: "#2E3438" },
    black: { main: "#000000" },
    warning: {
      main: colors.orange[400],
    },
    lime: { main: colors.lime[800] },
  },
  error: { main: colors.red[700] },
  typography: {
    fontFamily: "Open Sans, Montserrat, sans-serif",
    fontWeightBold: 700,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightLight: 300,
  },
});

export default theme;
