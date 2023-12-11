import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURLXMAPILocal } from "../../utils/http";

export const fetchAboutUs = createAsyncThunk("aboutUs/fetchAboutUs", async () => {
  const response = await axios.get(`${BaseURLXMAPILocal}/aboutUs`);
  return response.data;
});

const aboutUsSlice = createSlice({
  name: "aboutUs",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutUs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAboutUs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAboutUs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default aboutUsSlice.reducer;
