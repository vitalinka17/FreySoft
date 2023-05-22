import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/storeHook";
import { useSelector } from "react-redux";
import {
  transactionsDataSelector,
  transactionsMetaSelector,
} from "../../store/selectors/transactions";
import { getTransactions } from "../../store/reducers/transactionsSlice";
import { Box, Typography } from "@mui/material";
import Title from "../../components/Title/Title";
import TransactionTile from "../../components/TransactionTile/TransactionTile";
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "36px 0 28px",
        }}
      >
        <Title text={"Expenses"} />
        <Typography
          sx={{ fontWeight: "400", fontSize: "12px", color: "darkGrey.main" }}
        >
          View All
        </Typography>
      </Box>
      {transactionsLoading ? (
        <Typography>Loading</Typography>
      ) : (
        <ExpenseTile data={data} />
      )}
    </>
  );
};

export default Expenses;
