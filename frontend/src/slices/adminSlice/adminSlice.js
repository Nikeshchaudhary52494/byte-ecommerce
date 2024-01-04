import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../store/statuses";
import axios from "axios";
const adminSlice = createSlice({
    name: "admin",
    initialState: {
        usersData: [],
        productsData: [],
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
                state.usersData = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
                state.error = action.error.message;
            })
            .addCase(getAdminProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(getAdminProducts.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
                state.productsData = action.payload;
            })
            .addCase(getAdminProducts.rejected, (state, action) => {
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
export const getAdminProducts = createAsyncThunk("admin/products", async () => {
    try {
        const response = await axios.get('/api/v1/admin/products');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
})
export const updateUserRole = createAsyncThunk('admin/updateuserrole', async ({ userId, role }) => {
    try {
        await axios.put(`/api/v1/admin/updateuserrole/${userId}`, { role });
    } catch (error) {
        throw error.response.data;
    }
});
export const createProduct = createAsyncThunk('admin/createproducts', async ({ productData }) => {
    try {
        await axios.post('/api/v1/admin/product/new', productData);
    } catch (error) {
        throw error.response.data;
    }
});
export const updatedProduct = createAsyncThunk('admin/updateproduct', async ({ _id, productData }) => {
    try {
        console.log(_id)
        await axios.put(`/api/v1/admin/product/${_id}`, productData);
    } catch (error) {
        throw error.response.data;
    }
})
export default adminSlice.reducer;