import React, { useEffect } from "react";
import { SxProps } from "@mui/system";
import { useAppDispatch } from "../../hooks/storeHook";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { getTransactions } from "../../store/reducers/transactionsSlice";
import {
  transactionsDataSelector,
  transactionsMetaSelector,
} from "../../store/selectors/transactions";
import Title from "../../components/Title/Title";
import ExpenseTile from "../../components/ExpenseTile/ExpenseTile";

const Expenses = () => {
  const dispatch = useAppDispatch();

  const data = useSelector(transactionsDataSelector);
  const { loading: transactionsLoading } = useSelector(
    transactionsMetaSelector
  );

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <>
      <Box sx={expensesContainer}>
        <Title text={"Expenses"} />
        <Typography sx={viewAllStyled}>View All</Typography>
      </Box>
      {transactionsLoading ? (
        <Typography>Loading</Typography>
      ) : (
        <ExpenseTile data={data} />
      )}
    </>
  );
};
const expensesContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "36px",
};
export const viewAllStyled: SxProps = {
  fontWeight: "400",
  fontSize: "12px",
  color: "darkGrey.main",
};
export default Expenses;
