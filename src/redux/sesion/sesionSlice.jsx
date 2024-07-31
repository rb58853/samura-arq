import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'home',
};


export const sesionSlice = createSlice({
    name: "sesion",
    initialState,
    reducers: {
        setSesion: (state, action) => {
            state.name = action.payload;
        },
    }
});

export const { setSesion } = sesionSlice.actions;
export default sesionSlice.reducer;