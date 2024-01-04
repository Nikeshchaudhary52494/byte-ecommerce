import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from '../../store/statuses'
import axios from "axios";

let link = `/api/v1/product/`;
const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductDetails.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                // sendind Data to store
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});
export default productDetailsSlice.reducer;

// Thunks
export const fetchProductDetails = createAsyncThunk('productDetails/fetch', async ({ id }) => {
    // Geting data from database
    const { data } = await axios.get(`${link}/${id}`);
    return data.product;   //returing single productDetails

});