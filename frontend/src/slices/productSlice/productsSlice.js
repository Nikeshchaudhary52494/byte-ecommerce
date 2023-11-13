import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from '../../store/statuses'
import axios from "axios";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                // sending data to store
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    },
});
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk('products/fetch',
    async () => {
        const { data } = await axios.get(`/api/v1/products`);
        return data.products;
    });

export const fetchProducts2 = createAsyncThunk('products/fetch',
    async (params) => {
        // creating variable keyword with default=""
        const { keyword = "", price = [0, 2500] } = params;
        const { data } = await axios.get(`/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`);
        return data.products;
    }
);