import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAll from "../../services/api-client";

const initialState = {
  isLoading: false,
  currentPost: { posts: [], comments: [] },
};

export const getCurrentPost = createAsyncThunk(
  "currentPost/getCurrentPost",
  async (permalink) => {
    try {
      const resp = await getAll(`${permalink}.json`);
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
);

const currentPostSlice = createSlice({
  name: "currentPost",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const comment = { kind: "tl", data: action.payload };
      state.currentPost.comments.data.children.push(comment);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentPost.fulfilled, (state, action) => {
        state.isLoading = false;
        const [posts, comments] = action.payload;

        state.currentPost = { posts, comments };
      })
      .addCase(getCurrentPost.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default currentPostSlice.reducer;
export const { addComment } = currentPostSlice.actions;
