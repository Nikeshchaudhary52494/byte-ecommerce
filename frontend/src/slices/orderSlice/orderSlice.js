import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../store/statuses";
import axios from "axios";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
        singleOrderData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllOrders.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
                state.data = action.payload;
            })
            .addCase(getAllOrders.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
                state.error = action.error.message;
            })
            .addCase(getSingleOrder.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(getSingleOrder.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
                state.singleOrderData = action.payload;
            })
            .addCase(getSingleOrder.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
                state.error = action.error.message;
            })
            .addCase(deleteOrder.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(deleteOrder.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
            })
            .addCase(deleteOrder.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
                state.error = action.error.message;
            })
    }
})
export const getAllOrders = createAsyncThunk('order/getAllOrders', async () => {
    try {
        const response = await axios.get("/api/v1/admin/orders");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
});
export const getSingleOrder = createAsyncThunk('orders/getSingleOrder', async (orderId) => {
    try {
        const response = await axios.get(`/api/v1/order/${orderId}`);
        return response.data
    } catch (error) {
        throw error.response.data;
    }
})
export const deleteOrder = createAsyncThunk('orders/deleteOrder', async (orderId) => {
    try {
        console.log(orderId)
        await axios.delete(`/api/v1/admin/order/${orderId}`);
    } catch (error) {
        throw error.response.data;
    }
})
export const updateOrderStatus = createAsyncThunk(
    'order/updateOrderStatus',
    async ({ id, selectedOrderStatus }) => {
        try {
            console.log({ id, selectedOrderStatus })
            const response = await axios.put(`/api/v1/admin/order/${id}`, { selectedOrderStatus });
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
);
export default orderSlice.reducer;