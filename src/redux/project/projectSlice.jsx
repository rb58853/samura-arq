import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'none',
    description: 'none',
    image: '',
};


export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setProject: (state, action) => {
            state.name = action.payload.name;
            state.description = action.payload.description;
            state.image = action.payload.image;
        },
    }
});

export const { setProject } = projectSlice.actions;
export default projectSlice.reducer;