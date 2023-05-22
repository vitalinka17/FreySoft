import React, { FC, useState } from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

type Item = {
  month: string;
  totalSpent: string;
  id: number;
};

type Props = {
  data: Array<Item>;
  maxValue?: number;
};

const BarChart: FC<Props> = ({ data, maxValue = 5500 }) => {
  const [max] = useState<number>(maxValue);
  return (
    <BoxContainer>
      {data.map(({ month, totalSpent, id }) => {
        const priceProportion = (value: number) => (value * 100) / max;
        const heightProportion = () =>
          (130 * priceProportion(Number(totalSpent))) / 100;
        const heightRes = heightProportion();
        return (
          <BarItem key={id}>
            <Typography
              sx={{ fontWeight: "400", fontSize: "10px", marginTop: "5px" }}
              className="text"
            >
              ${totalSpent}
            </Typography>
            <Bar height={heightRes.toString()} />
            <Typography
              sx={{ fontWeight: "400", fontSize: "13px", marginTop: "16px" }}
              className="text"
            >
              {month.slice(0, 3)}
            </Typography>
          </BarItem>
        );
      })}
    </BoxContainer>
  );
};
const BoxContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "24px",
  alignItems: "flex-end",
}));
const BarItem = styled("div")(({ theme }) => ({
  textAlign: "center",
}));

interface BarProps {
  height: string;
}
const Bar = styled("div")<BarProps>(({ theme, height }) => ({
  backgroundColor: theme.palette.mediumGrey.main,
  borderRadius: "6px 6px 0px 0px",
  height: `${height}px`,
  width: "31px",
  transition: ".5s ease",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    "~ .text": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default BarChart;
