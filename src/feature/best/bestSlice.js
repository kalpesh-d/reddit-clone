import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAll from "../../services/api-client";

const initialState = {
  isLoading: false,
  bestPosts: [],
};

export const getBestPosts = createAsyncThunk("best/getBestPosts", async () => {
  try {
    const resp = await getAll("best.json");
    return resp;
  } catch (err) {
    console.log(err);
  }
});

const bestSlice = createSlice({
  name: "best",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getBestPosts
      .addCase(getBestPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        const cachedBestPosts = sessionStorage.getItem("bestPosts");

        if (cachedBestPosts) {
          // Use the cached data if available
          state.bestPosts = JSON.parse(cachedBestPosts);
        } else {
          // Save the bestPosts data to sessionStorage
          const bestPosts = action.payload;
          sessionStorage.setItem("bestPosts", JSON.stringify(bestPosts));

          state.bestPosts = bestPosts;
        }
      })
      .addCase(getBestPosts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default bestSlice.reducer;
