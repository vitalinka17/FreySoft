import React, { useEffect } from "react";
import { SxProps } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { useAppDispatch } from "../../hooks/storeHook";
import { useSelector } from "react-redux";
import {
  transactionsDataSelector,
  transactionsMetaSelector,
} from "../../store/selectors/transactions";
import { getTransactions } from "../../store/reducers/transactionsSlice";
import Title from "../../components/Title/Title";
import TransactionTile from "../../components/TransactionTile/TransactionTile";
import { viewAllStyled } from "../Expenses/Expenses";

const Transactions = () => {
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
      <Box sx={transactionsContainer}>
        <Title text={"Transactions"} />
        <Typography sx={viewAllStyled}>View All</Typography>
      </Box>
      {transactionsLoading ? (
        <Typography>Loading</Typography>
      ) : (
        <TransactionTile data={data} />
      )}
    </>
  );
};
const transactionsContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default Transactions;
