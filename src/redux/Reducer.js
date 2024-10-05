import { createSlice } from "@reduxjs/toolkit";
import { builderRegister } from "./User/ExtraReducerUser";

const appSlice = createSlice({
    name: "Lavu",
    initialState: {
        loading: false,
        user: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builderRegister(builder);
    },

})

export const {} = appSlice.actions;
export default appSlice.reducer;