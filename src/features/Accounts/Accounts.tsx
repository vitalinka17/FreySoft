import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/storeHook";
import { useSelector } from "react-redux";
import {
  transactionsDataSelector,
  transactionsMetaSelector,
} from "../../store/selectors/transactions";
import { getTransactions } from "../../store/reducers/transactionsSlice";
import { Box, Typography } from "@mui/material";
import BankAccount from "../../components/BankAccount/BankAccount";

const Accounts = () => {
  const dispatch = useAppDispatch();

  const data = useSelector(transactionsDataSelector);
  const { loading: transactionsLoading } = useSelector(
    transactionsMetaSelector
  );

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <Box>
      {transactionsLoading ? (
        <Typography>Loading</Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            minHeight: "250px",
          }}
        >
          <BankAccount color={"secondary"} />
          <BankAccount color={"primary"} />
        </Box>
      )}
    </Box>
  );
};

export default Accounts;
