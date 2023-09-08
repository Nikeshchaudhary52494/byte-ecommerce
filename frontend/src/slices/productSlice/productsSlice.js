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
        // .addCase(fetchProducts2.pending, (state, action) => {
        //     state.status = STATUSES.LOADING;
        // })
        // .addCase(fetchProducts2.fulfilled, (state, action) => {
        //     // sending data to store
        //     state.data = action.payload;
        //     state.status = STATUSES.IDLE;
        // })
        // .addCase(fetchProducts2.rejected, (state, action) => {
        //     state.status = STATUSES.ERROR;
        // });
    },
});
export default productSlice.reducer;
// Thunks
// let link = ``;

export const fetchProducts = createAsyncThunk('products/fetch',
    async () => {
        const { data } = await axios.get(`/api/v1/products`);
        return data.products;
    });

export const fetchProducts2 = createAsyncThunk('products/fetch',
    async (params) => {
        console.log(params);
        const { keyword = "", price } = params;
        console.log(keyword);

        const { data } = await axios.get(`/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`);
        return data.products;

    }



);