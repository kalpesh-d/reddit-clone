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

const findCommentAndAddReply = (comments, parentId, reply) => {
  for (const comment of comments) {
    if (comment.data.id === parentId) {
      comment.data.replies = comment.data.replies || { data: { children: [] } };
      comment.data.replies.data.children.push(reply);
      return true;
    } else if (
      comment.data.replies &&
      comment.data.replies.data.children.length > 0
    ) {
      if (
        findCommentAndAddReply(
          comment.data.replies.data.children,
          parentId,
          reply
        )
      ) {
        return true;
      }
    }
  }
  return false;
};

const currentPostSlice = createSlice({
  name: "currentPost",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { id, body_html, author, ups, parent_id } = action.payload;

      const comment = {
        kind: "tl",
        data: { id, body_html, author, ups, parent_id },
      };

      if (parent_id) {
        // If it's a reply, find the parent comment and add the reply to it
        findCommentAndAddReply(
          state.currentPost.comments.data.children,
          parent_id,
          comment
        );
      } else {
        // If it's a new comment (not a reply), add it to the main comments array
        state.currentPost.comments.data.children.push(comment);
      }
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
