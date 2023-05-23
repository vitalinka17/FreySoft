import React, { FC } from "react";
import { SxProps } from "@mui/system";
import { Typography } from "@mui/material";

type Props = {
  text: string;
};

const Title: FC<Props> = ({ text }) => {
  return <Typography sx={titleStyled}>{text}</Typography>;
};

const titleStyled: SxProps = {
  color: "black.main",
  fontSize: "24px",
  fontWeight: "500",
  lineHeight: "28px",
};
export default Title;
