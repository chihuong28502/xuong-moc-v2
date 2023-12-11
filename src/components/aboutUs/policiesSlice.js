import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURLXMAPILocal } from "../../utils/http";

export const fetchPolicies = createAsyncThunk(
  "policies/fetchPolicies",
  async () => {
    const response = await axios.get(`${BaseURLXMAPILocal}/policies`);
    return response.data;
  }
);
const policiesSlice = createSlice({
  name: "policies",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolicies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPolicies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPolicies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default policiesSlice.reducer;
