import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../store/statuses";
import axios from "axios";
const adminSlice = createSlice({
    name: "admin",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
                state.data = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
                state.error = action.error.message;
            })
    }
})
export const getAllUsers = createAsyncThunk("admin/getAllUsers", async () => {
    try {
        const response = await axios.get('/api/v1/admin/getAllUser');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
})
export default adminSlice.reducer;