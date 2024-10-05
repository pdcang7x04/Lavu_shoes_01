import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../helper/AxiosInstance";

export const register = createAsyncThunk(
    "/users/register",
    async (data, { rejectWithValue }) => {
        try {
            const res = await AxiosInstance().post("/users/register", data)
            const result = res.data
            return result
        } catch (error) {
            return rejectWithValue(error.res.data)
        }
    }
)