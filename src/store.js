import { configureStore } from "@reduxjs/toolkit";
import popularReducer from "./feature/popular/popularSlice";

const store = configureStore({
  reducer: {
    popular: popularReducer,
  },
});

export default store;
