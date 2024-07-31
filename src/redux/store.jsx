import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./project/projectSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});