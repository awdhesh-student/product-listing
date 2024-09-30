import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ category, page, size }) => {
    const categoryUrl = category ? `/category/${category}` : "";
    const response = await axios.get(
      `https://dummyjson.com/products${categoryUrl}?limit=${size}&skip=${
        (page - 1) * size
      }`
    );
    return response.data.products;
  }
);

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (searchTerm) => {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${searchTerm}`
    );
    return response.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { list: [], page: 1 },
  reducers: {
    clearProducts: (state) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list.push(...action.payload);
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { clearProducts } = productSlice.actions;
export default productSlice.reducer;


