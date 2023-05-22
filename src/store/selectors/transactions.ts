import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const transactionsSelector = (state: RootState) => state.transactions;

export const transactionsDataSelector = createSelector(
  transactionsSelector,
  (transactions) => transactions.data
);

export const transactionsMetaSelector = createSelector(
  transactionsSelector,
  (transactions) => transactions.meta
);
