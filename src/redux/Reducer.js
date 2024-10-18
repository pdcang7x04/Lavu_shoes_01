import { createSlice } from "@reduxjs/toolkit";
import { builderLogin, builderRegister, builderSendOTPVerificationEmail, builderSignInWithGoogle } from "./User/ExtraReducerUser";
import { builderGetBrand } from "./brand/ExtraReducerBrand";
import { builderGetProductByBrand } from "./product/ExtraReducerProducts";

const appSlice = createSlice({
    name: "Lavu",
    initialState: {
        loading: false,
        user: null,
        otp: null,
        cart: [],

    },
    reducers: {
        addItemToCart: (state, action) => {

            // kiểm tra giỏ hàng đã tồn tại sản phẩm chưa
            const index = state.cart.findIndex((item) => item._id.toString() == action.payload._id.toString());
            const color = state.cart.findIndex((item) => item.color.name == action.payload.color.name);
            const size = state.cart.findIndex((item) => item.size == action.payload.size);


            if (index >= 0 && color >= 0 && size >= 0) {
                state.cart[index].quantity += action.payload.quantity;
            }
            else {
                state.cart.push(action.payload);
            }
        },
        removeItemFromCart: (state, action) => {
            state.cart = state.cart.filter((item) =>
                item._id.toString() != action.payload._id.toString() ||
                item.color.name != action.payload.color.name ||
                item.size != action.payload.size
            )
        },
        ascendingQuantity: (state, action) => {
            const index = state.cart.findIndex((item) =>
                item._id.toString() === action.payload._id.toString() &&
                item.color.name === action.payload.color.name &&
                item.size === action.payload.size
            );

                // Kiểm tra xem số lượng hiện tại có nhỏ hơn số lượng tối đa không
                if (state.cart[index].quantity < state.cart[index].currentQuantity) {
                    state.cart[index].quantity++;
                }
            
        },
        decreaseQuantity: (state, action) => {
            const index = state.cart.findIndex((item) =>
                item._id.toString() === action.payload._id.toString() &&
                item.color.name === action.payload.color.name &&
                item.size === action.payload.size
            );

            if (state.cart[index].quantity > 1){
                state.cart[index].quantity--;
            }else{
                return;
            }
        },
        clearCart: (state, action) => {
            state.cart = [];
        }
    },
    extraReducers: (builder) => {
        builderRegister(builder);
        builderSignInWithGoogle(builder)
        builderLogin(builder)
        builderSendOTPVerificationEmail(builder)
        builderGetBrand(builder)
    },

})

export const { addItemToCart, removeItemFromCart, ascendingQuantity, decreaseQuantity, clearCart } = appSlice.actions;
export default appSlice.reducer;