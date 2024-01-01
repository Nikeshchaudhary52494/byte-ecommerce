import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../store/statuses";
import axios from "axios";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
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
})
export default orderSlice.reducer;