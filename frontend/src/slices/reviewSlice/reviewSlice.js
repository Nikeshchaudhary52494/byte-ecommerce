import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../store/statuses";
import axios from "axios";

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {},
    extraReducers: (builder) => {
    },
});
export const addReview = createAsyncThunk(
    'reviews/addReview',
    async ({ rating, comment, productId }) => {
        try {
            await axios.put('/api/v1/review', {
                rating,
                comment,
                productId,
            });
        } catch (error) {
            throw error.response.data;
        }
    }
);
export default reviewSlice.reducer;