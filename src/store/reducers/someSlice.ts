import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
  slidesData: Array<string>;
  loader: boolean;
};

const initialState: InitialState = {
  slidesData: [],
  loader: true,
};

export const fetchSlides = createAsyncThunk(
  "slides/fetchData",
  async (thunkAPI) => {
    const response = axios.get(`/slides`).then(({ data }) => data);
    return response;
  }
);

export const slidesSlice = createSlice({
  name: "slides",
  initialState,
  extraReducers: {},
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(fetchSlides.pending, (state) => {
  //     state.loader = true;
  //   });
  //   builder.addCase(fetchSlides.fulfilled, (state, action) => {
  //     state.slidesData = action.payload;
  //     state.loader = false;
  //   });
  // },
});

export default slidesSlice.reducer;
