import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURLXMAPI } from "../../utils/http";

export const fetchIntroduce = createAsyncThunk(
  "introduce/fetchIntroduce",
  async () => {
    const response = await axios.get(`${BaseURLXMAPI}/Introductions`);
    return response.data;
  }
);

const introduceSlice = createSlice({
  name: "introduce",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIntroduce.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIntroduce.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchIntroduce.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default introduceSlice.reducer;
