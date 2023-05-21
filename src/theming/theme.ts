import { createTheme, colors, Theme } from "@mui/material";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: colors.amber[900],
    },
    secondary: {
      main: colors.deepPurple[400],
    },
    // @ts-ignore
    deepBlue: { main: "#2F3046" },
    mediumGrey: { main: colors.grey[50] },
    darkGrey: { main: colors.grey[700] },
    white: { main: colors.common.white },
    black: { main: colors.common.black },
    green: { main: colors.green[400] },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontWeightBold: 700,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightLight: 300,
  },
});

export default theme;
