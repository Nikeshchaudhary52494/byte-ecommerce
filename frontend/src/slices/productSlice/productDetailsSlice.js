import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from '../../store/statuses'
import axios from "axios";

let link = `/api/v1/product/`;
const productSlice1 = createSlice({
    name: 'product',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                // sendind Data to store
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});
export default productSlice1.reducer;

// Thunks
export const fetchProduct = createAsyncThunk('productDetails/fetch', async (e) => {
    const { id } = e;
    // Geting data from database
    const { data } = await axios.get(`${link}/${id}`);
    return data.product;   //returing single productDetails

});