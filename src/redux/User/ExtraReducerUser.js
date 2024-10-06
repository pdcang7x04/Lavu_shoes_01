import { login, register, sendOTPVerificationEmail, signInWithGoogle } from "./CallAPIUser"

export const builderRegister = (builder) => {
    builder.addCase(register.pending, (state) => {
        state.loading = true
        console.log(">>>>> register.pending: ")
    });
    builder.addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        console.log(">>>>> reister.fulfilled: ", action.payload)
        state.user = action.payload
    });
    builder.addCase(register.rejected, (state, action)  => {
        state.loading = false
        console.log(">>>>> register.rejected: ", action.payload)
    })
}

export const builderSignInWithGoogle = (builder) => {
    builder.addCase(signInWithGoogle.pending, (state) => {
        state.loading = true
        console.log(">>>>> signInWithGoogle.pending: ")
    });
    builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        console.log(">>>>> signInWithGoogle.fulfilled: ", action.payload)
        state.user = action.payload
    });
    builder.addCase(signInWithGoogle.rejected, (state, action)  => {
        state.loading = false
        console.log(">>>>> signInWithGoogle.rejected: ", action.payload)
    })
}

export const builderLogin = (builder) => {
    builder.addCase(login.pending, (state) => {
        state.loading = true
        console.log(">>>>> login.pending: ")
    });
    builder.addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        console.log(">>>>> login.fulfilled: ", action.payload)
        state.user = action.payload
    });
    builder.addCase(login.rejected, (state, action)  => {
        state.loading = false
        console.log(">>>>> login.rejected: ", action.payload)
    })
}

export const builderSendOTPVerificationEmail = (builder) => {
    builder.addCase(sendOTPVerificationEmail.pending, (state) => {
        state.loading = true
        console.log(">>>>> sendOTPVerificationEmail.pending: ")
    });
    builder.addCase(sendOTPVerificationEmail.fulfilled, (state, action) => {
        state.loading = false;
        console.log(">>>>> sendOTPVerificationEmail.fulfilled: ", action.payload)
        state.otp = action.payload
    });
    builder.addCase(sendOTPVerificationEmail.rejected, (state, action)  => {
        state.loading = false
        console.log(">>>>> login.rejected: ", action.payload)
    })
}