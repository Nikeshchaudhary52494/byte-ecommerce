import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from "../../store/statuses";
import axios from "axios";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // AddCase for getAllCartProducts
            .addCase(getAllCartProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(getAllCartProducts.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
                state.data = action.payload;
            })
            .addCase(getAllCartProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
                state.error = action.error.message;
            })
            // AddCase for addToCart
            .addCase(addToCart.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
                state.data = action.payload;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
                state.error = action.error.message;
            })
            // AddCase for removeFromCart
            .addCase(removeFromCart.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
                state.data = action.payload;
            })
            .addCase(removeFromCart.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
                state.error = action.error.message;
            })
    },
});
export const addToCart = createAsyncThunk("cart/addToCart", async ({ userId, productId, quantity }) => {
    try {
        const response = await axios.post("/api/v1/cart/add", { userId, productId, quantity });
        return response.data.cart.products;
    } catch (error) {
        throw error.response.data;
    }
});
export const removeFromCart = createAsyncThunk("cart/removeFromCart", async ({ userId, productId }) => {
    try {
        const response = await axios.delete(`/api/v1/cart/remove/${productId}`, { data: { userId, productId } });
        return response.data.cart.products;
    } catch (error) {
        throw error.response.data;
    }
});
export const getAllCartProducts = createAsyncThunk("cart/getAllCartProducts", async (userId) => {
    try {
        const response = await axios.get(`/api/v1/cart`);
        return response.data.cartProducts;
    } catch (error) {
        throw error.response.data;
    }
});
export default cartSlice.reducer;