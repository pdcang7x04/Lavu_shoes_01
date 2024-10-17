import { createAsyncThunk } from "@reduxjs/toolkit"
import AxiosInstance from "../../helper/AxiosInstance"

export const getProductByType = createAsyncThunk(
    "/products/getProduct",
    async (data, { rejectWithValue }) => {
        try {
            const res = await AxiosInstance().get(`/products/getProduct?page=${data.page}&limit=${data.limit}&keywords`, data)
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