import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { STATUSES } = require("../../store/statuses");

const contactUsSlice = createSlice({
    name: "contactUs",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMessages.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(getAllMessages.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
                state.data = action.payload.data;
            })
            .addCase(getAllMessages.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
                state.error = action.error.message;
            })
    }
})
export const createMessage = createAsyncThunk('contactUs/createmessaage', async ({ message }) => {
    try {
        await axios.post("/api/v1/contactus", { message });
    } catch (error) {
        throw error.response.data;
    }
});
export const getAllMessages = createAsyncThunk('contactUs/getAllMessages', async () => {
    try {
        const response = await axios.get("/api/v1/admin/messages");
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const deleteMessageById = createAsyncThunk('contactUs/deleteMessageById', async ({ messageId }) => {
    try {
        await axios.delete(`/api/v1/admin/message/${messageId}`);
    } catch (error) {
        throw error.response.data;
    }
});

export default contactUsSlice.reducer;