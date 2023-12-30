import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAll from "../../services/api-client";

const initialState = {
  isLoading: false,
  popularData: [],
};

export const getPopularPost = createAsyncThunk(
  "popular/getPopularPost",
  async () => {
    try {
      const resp = await getAll("popular.json");
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularPost.fulfilled, (state, aciton) => {
        state.isLoading = false;
        state.popularData = aciton.payload.children;
      })
      .addCase(getPopularPost.rejected, (state, aciton) => {
        state.isLoading = false;
      });
  },
});

export default popularSlice.reducer;
