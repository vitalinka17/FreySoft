import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { SxProps } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { useAppDispatch } from "../../hooks/storeHook";
import { getAnalytics } from "../../store/reducers/analyticsSlice";
import {
  analyticsDataSelector,
  analyticsMetaSelector,
} from "../../store/selectors/analytics";
import Title from "../../components/Title/Title";
import YearDropDown from "../../components/YearDropDown/YearDropDown";
import BarChart from "../BarCharts/BarChart";

const Analytics = () => {
  const dispatch = useAppDispatch();

  const data = useSelector(analyticsDataSelector);
  const { loading: analyticsLoading } = useSelector(analyticsMetaSelector);

  useEffect(() => {
    dispatch(getAnalytics());
  }, [dispatch]);

  return (
    <>
      <Box sx={analyticsWrapper}>
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
const analyticsWrapper: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
export default Analytics;
