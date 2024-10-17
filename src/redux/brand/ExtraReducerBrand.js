import { getBrand } from "./BrandAPI";

export const builderGetBrand = (builder) => {
    builder.addCase(getBrand.pending, (state) => {
        state.loading = true
        console.log(">>>>> getBrand.pending: ")
    });
    builder.addCase(getBrand.fulfilled, (state, action) => {
        state.loading = false;
        console.log(">>>>> getBrand.fulfilled: ", action.payload)
    });
    builder.addCase(getBrand.rejected, (state, action)  => {
        state.loading = false
        console.log(">>>>> getBrand.rejected: ", action.payload)
    })
}