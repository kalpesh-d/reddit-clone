import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAll from "../../services/api-client";

const initialState = {
  isLoading: false,
  postsByCategory: {
    best: [],
    hot: [],
    top: [],
    rising: [],
  },
  selectedCategory: "best",
};

export const getPosts = createAsyncThunk("posts/getPosts", async (category) => {
  try {
    // console.log(`${category}.json`);
    const resp = await getAll(`/${category}.json`);
    return resp;
  } catch (err) {
    console.log(err);
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsForCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // getPosts
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        const category = state.selectedCategory;
        const cachedPosts = sessionStorage.getItem(`${category}Posts`);

        if (cachedPosts) {
          // Use the cached data if available
          state.postsByCategory[category] = JSON.parse(cachedPosts);
        } else {
          // Save the bestPosts data to sessionStorage
          const posts = action.payload;
          sessionStorage.setItem(`${category}Posts`, JSON.stringify(posts));

          state.postsByCategory[category] = posts;
        }
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default postsSlice.reducer;
export const { setPostsForCategory } = postsSlice.actions;
