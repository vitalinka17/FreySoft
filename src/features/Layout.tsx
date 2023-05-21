import React, { FC, ReactNode } from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import { Container } from "@mui/material";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container maxWidth={"xs"} sx={{ padding: "30px" }}>
      <Header />
      {children}
      <NavigationBar />
    </Container>
  );
};

export default Layout;
