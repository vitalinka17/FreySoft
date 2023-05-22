import { configureStore } from "@reduxjs/toolkit";
import analyticsReducer from "./reducers/analyticsSlice";
import transactionsReducer from "./reducers/transactionsSlice";

const store = configureStore({
  reducer: {
    analytics: analyticsReducer,
    transactions: transactionsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
