import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
type Item = {
  month: string;
  totalSpent: string;
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

export const getAnalytics = createAsyncThunk(
  "analytics/fetchAnalytics",
  async () => {
    const data = await fetch("API/analytics.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((data) => data.json());
    return data;
  }
);
export const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnalytics.pending, (state) => {
      state.meta.loading = true;
    });
    builder.addCase(getAnalytics.fulfilled, (state, action) => {
      state.data = action.payload;
      state.meta.loading = false;
    });
  },
});

export default analyticsSlice.reducer;
