import React, { FC } from "react";
import { Typography } from "@mui/material";
type Props = {
  text: string;
};

const Title: FC<Props> = ({ text }) => {
  return (
    <Typography
      sx={{
        color: "black.main",
        fontSize: "24px",
        fontWeight: "500",
        lineHeight: "28px",
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
