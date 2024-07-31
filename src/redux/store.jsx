import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./project/projectSlice";
import sesionSlice from "./sesion/sesionSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
    sesion: sesionSlice,
  },
});