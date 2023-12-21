import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURLXMAPI } from "../utils/http";
import slugifyText from "../utils/formatText";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`${BaseURLXMAPI}/products`);
    localStorage.setItem("products", JSON.stringify(response.data));
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    dataDetail: null,
    valueSearch: "",
    dataSearch: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setDataDetail: (state, action) => {
      localStorage.setItem("dataDetail", JSON.stringify(action.payload));
      state.dataDetail = action.payload;
    },
    setValueSearch: (state, action) => {
      state.valueSearch = action.payload;
    },
    setDataSearch: (state, action) => {
      state.dataSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { setDataDetail, setValueSearch, setDataSearch } =
  productsSlice.actions;
export default productsSlice.reducer;
