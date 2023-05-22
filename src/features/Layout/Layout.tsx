import React, { FC, ReactNode } from "react";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Container } from "@mui/material";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container
      maxWidth={"xs"}
      sx={{
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "36px",
        minHeight: "900px",
      }}
    >
      <Header />
      {children}
      <NavigationBar />
    </Container>
  );
};

export default Layout;
