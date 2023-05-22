import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Title from "../../components/Title/Title";
import YearDropDown from "../../components/YearDropDown/YearDropDown";
import BarChart from "../BarCharts/BarChart";
import { useAppDispatch } from "../../hooks/storeHook";
import { getAnalytics } from "../../store/reducers/analyticsSlice";
import {
  analyticsDataSelector,
  analyticsMetaSelector,
} from "../../store/selectors/analytics";
import { useSelector } from "react-redux";

const Analytics = () => {
  const dispatch = useAppDispatch();

  const data = useSelector(analyticsDataSelector);
  const { loading: analyticsLoading } = useSelector(analyticsMetaSelector);

  useEffect(() => {
    dispatch(getAnalytics());
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "36px 0 28px",
        }}
      >
        <Title text={"Analytics"} />
        <YearDropDown />
      </Box>
      {analyticsLoading ? (
        <Typography>Loading</Typography>
      ) : (
        <BarChart data={data} />
      )}
    </>
  );
};

export default Analytics;
