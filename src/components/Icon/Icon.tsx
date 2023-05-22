import React, { FC, ReactNode } from "react";
import { BottomNavigationAction } from "@mui/material";

type Props = {
  value: string;
  icon: ReactNode;
  onPress: () => void;
};

const Icon: FC<Props> = ({ value, icon, onPress }) => {
  return (
    <BottomNavigationAction
      sx={{ cursor: "pointer" }}
      onClick={onPress}
      value={value}
      icon={icon}
    />
  );
};

export default Icon;
