import { register } from "./CallAPIUser"

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