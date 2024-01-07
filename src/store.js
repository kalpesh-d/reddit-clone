import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./feature/posts/postsSlice";
import currentPostReducer from "./feature/currentPost/currentPostSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    currentPost: currentPostReducer,
  },
});

export default store;
