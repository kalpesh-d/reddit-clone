import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAll from "../../services/api-client";

const initialState = {
  isLoading: false,
  popularPosts: [],
  subredditInfos: [],
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

export const getSubredditInfos = createAsyncThunk(
  "popular/getSubredditInfos",
  async (enpoint) => {
    try {
      const resp = await getAll(`${enpoint}/about.json`);
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
      .addCase(getPopularPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popularPosts = action.payload;
      })
      .addCase(getPopularPosts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getSubredditInfos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubredditInfos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subredditInfos = action.payload;
      })
      .addCase(getSubredditInfos.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default popularSlice.reducer;
