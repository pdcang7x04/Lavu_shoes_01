import { createAsyncThunk } from "@reduxjs/toolkit"
import AxiosInstance from "../../helper/AxiosInstance"

export const getBrand = createAsyncThunk(
    "/brands/getBrand",
    async (data, { rejectWithValue }) => {
        try {
            const res = await AxiosInstance().get(`/brands/getBrand`, data)
            if(!res){
                console.log(null)
            }
            const result = res.data
            return result
        } catch (error) {
            return rejectWithValue(error.res.data)
        }
    }
)