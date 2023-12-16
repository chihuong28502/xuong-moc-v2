import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURLXMAPILocal } from "../utils/http";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    const response = await axios.get(`${BaseURLXMAPILocal}/wishlist`);
    return response.data;
  }
);
export const addWishListAsync = createAsyncThunk(
  "wishlist/addWishList",
  async (itemWishList, { dispatch }) => {
    try {
      // Gửi dữ liệu mới đến API để thêm sản phẩm mới
      const response = await axios.post(
        `${BaseURLXMAPILocal}/wishlist`,
        itemWishList
      );
      // Dispatch action để cập nhật Redux store với sản phẩm mới
      dispatch(wishlistSlice.actions.addItemWishList(response.data));

      return response.data;
    } catch (error) {
      console.error("Error adding addWishList:", error);
      throw error;
    }
  }
);
export const deleteWishListAsync = createAsyncThunk(
  "wishlist/deleteWishList",
  async (itemWishListId, { dispatch }) => {
    try {
      // Gửi dữ liệu mới đến API để thêm sản phẩm mới
      const response = await axios.delete(
        `${BaseURLXMAPILocal}/wishlist/${itemWishListId}`
      );
      // Dispatch action để cập nhật Redux store với sản phẩm mới
      dispatch(wishlistSlice.actions.removeItemWishList(itemWishListId));
      return response.data;
    } catch (error) {
      console.log("itemWishListId", itemWishListId);
      console.error("Error adding addWishList:", error);
      throw error;
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { data: [], status: "idle", error: null },

  reducers: {
    addItemWishList: (state, action) => {
      state.data.push(action.payload);
    },
    removeItemWishList: (state, action) => {
      const arrRemove = state.data.filter((item) => item.id !== action.payload);
      state.data = arrRemove;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { addItemWishList, removeItemWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
