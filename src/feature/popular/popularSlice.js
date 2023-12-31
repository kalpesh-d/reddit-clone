import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAll from "../../services/api-client";

const initialState = {
  isLoading: false,
  popularPosts: [],
};

export const getPopularPosts = createAsyncThunk(
  "popular/getPopularPosts",
  async () => {
    try {
      const resp = await getAll("popular.json");
      return resp;
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
      // getPopularPosts
      .addCase(getPopularPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        const cachedPopularPosts = sessionStorage.getItem("popularPosts");

        if (cachedPopularPosts) {
          // Use the cached data if available
          state.popularPosts = JSON.parse(cachedPopularPosts);
        } else {
          // Save the popularPosts data to sessionStorage
          const popularPosts = action.payload;
          sessionStorage.setItem("popularPosts", JSON.stringify(popularPosts));

          state.popularPosts = popularPosts;
        }
      })
      .addCase(getPopularPosts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default popularSlice.reducer;
