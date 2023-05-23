import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type Item = {
  store: string;
  account: string;
  date: string;
  total: string;
  rest: string;
  percent: string;
  img: string;
  id: number;
};

type InitialState = {
  meta: { loading: boolean; loaded: boolean; error: null | string };
  data: Array<Item>;
};

const initialState: InitialState = {
  meta: { loading: false, loaded: false, error: null },
  data: [],
};

export const getTransactions = createAsyncThunk(
  "transactions/fetchtransactions",
  async () => {
    const data = await fetch("API/expenses.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((data) => data.json());
    return data;
  }
);
export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactions.pending, (state) => {
      state.meta.loading = true;
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.data = action.payload;
      state.meta.loading = false;
    });
  },
});

export default transactionsSlice.reducer;
