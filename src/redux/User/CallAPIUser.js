import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../helper/AxiosInstance";
import Toast from "react-native-toast-message";

export const register = createAsyncThunk(
    "/users/register",
    async (data, { rejectWithValue }) => {
        try {
            const res = await AxiosInstance().post("/users/register", data)
            if (result.status) {
                const result = res.data
                return result
            } else {
                Toast.show({
                    text1: "Email hoặc mật khẩu không đúng",
                    position: 'top',
                    type: 'error',
                })
            }
        } catch (error) {
            return rejectWithValue(error.res.data)
        }
    }
)

export const signInWithGoogle = createAsyncThunk(
    "/users/signInWithGoogle",
    async (data, { rejectWithValue }) => {
        try {
            const res = await AxiosInstance().post("/users/signInWithGoogle", data)
            const result = res.data
            return result
        } catch (error) {
            return rejectWithValue(error.res.data)
        }
    }
)

export const login = createAsyncThunk(
    "/users/login",
    async (data, { rejectWithValue }) => {
        try {
            const res = await AxiosInstance().post("/users/login", data)
            const result = res.data
            return result
        } catch (error) {
            return rejectWithValue(error.res.data)
        }
    }
)

export const sendOTPVerificationEmail = createAsyncThunk(
    "/users/sendOTPVerificationEmail",
    async (data, { rejectWithValue }) => {
        try {
            const res = await AxiosInstance().post("/users/sendOTPVerificationEmail", data)
            const result = res.data
            return result
        } catch (error) {
            return rejectWithValue(error.res.data)
        }
    }
)

