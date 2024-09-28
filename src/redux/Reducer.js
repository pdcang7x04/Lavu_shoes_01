import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "Lavu",
    initialState: {
        loading: false,
        user: null
    },
    reducers: {},
    // extraReducers: (builder) => {
    // },

})

export const {} = appSlice.actions;
export default appSlice.reducer;