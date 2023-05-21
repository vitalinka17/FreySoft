import { configureStore } from "@reduxjs/toolkit";
import analyticsReducer from "./reducers/analyticsSlice";

const store = configureStore({
  reducer: {
    analytics: analyticsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
