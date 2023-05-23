import React, { FC, ReactNode } from "react";
import { SxProps } from "@mui/system";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Container } from "@mui/material";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container maxWidth={"xs"} sx={containerStyled}>
      <Header />
      {children}
      <NavigationBar />
    </Container>
  );
};
const containerStyled: SxProps = {
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "36px",
  minHeight: "900px",
};
export default Layout;
