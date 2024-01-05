import { configureStore } from "@reduxjs/toolkit";
import bestReducer from "./feature/best/bestSlice";

const store = configureStore({
  reducer: {
    best: bestReducer,
  },
});

export default store;
