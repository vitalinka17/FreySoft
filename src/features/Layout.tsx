import React, { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const auth = true;
  return <div>{auth ? children : null}</div>;
};

export default Layout;
