import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const analyticsSelector = (state: RootState) => state.analytics;

export const analyticsDataSelector = createSelector(
  analyticsSelector,
  (analytics) => analytics.data
);

export const analyticsMetaSelector = createSelector(
  analyticsSelector,
  (analytics) => analytics.meta
);
