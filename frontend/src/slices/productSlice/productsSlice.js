import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from '../../store/statuses'
import axios from "axios";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
        productreviewsData: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(getProductReviews.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(getProductReviews.fulfilled, (state, action) => {
                state.productreviewsData = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(getProductReviews.rejected, (state, action) => {
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
    async ({ keyword = "", price = [0, 2500], categoryName }) => {
        if (categoryName) {
            const { data } = await axios.get(`/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${categoryName}`);
            return data.products;
        } else {
            const { data } = await axios.get(`/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`);
            return data.products;
        }
    },
);
export const getProductReviews = createAsyncThunk('products/getProductsreviews', async ({ productId }) => {
    try {
        const response = await axios.get(`/api/v1/reviews?productId=${productId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    };
});
export const deleteProductReviews = createAsyncThunk('products/deleteProductReviews', async ({ productId, reviewId }) => {
    try {
        await axios.delete(`/api/v1/reviews?productId=${productId}&id=${reviewId}`);
    } catch (error) {
        throw error.response.data;
    }
})