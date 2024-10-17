import { createSlice } from "@reduxjs/toolkit";
import { builderLogin, builderRegister, builderSendOTPVerificationEmail, builderSignInWithGoogle } from "./User/ExtraReducerUser";
import { builderGetBrand } from "./brand/ExtraReducerBrand";

const appSlice = createSlice({
    name: "Lavu",
    initialState: {
        loading: false,
        user: null,
        otp: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builderRegister(builder);
        builderSignInWithGoogle(builder)
        builderLogin(builder)
        builderSendOTPVerificationEmail(builder)
        builderGetBrand(builder)
    },

})

export const {} = appSlice.actions;
export default appSlice.reducer;