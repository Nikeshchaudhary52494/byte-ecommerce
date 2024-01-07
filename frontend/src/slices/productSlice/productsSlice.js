import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from '../../store/statuses'
import axios from "axios";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        productDetails: {},
        status: STATUSES.IDLE,
        productreviewsData: [],
        error: null,
    },
    reducers: {
        resetError: (state, action) => {
            state.status = STATUSES.IDLE;
            state.error = null
        },
        resetIsReviewAdded: (state, action) => {
            state.isReviewAdded = null;
        }
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
            .addCase(getProductDetails.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(getProductDetails.fulfilled, (state, action) => {
                state.productDetails = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(getProductDetails.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(updatedProductStock.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(updatedProductStock.fulfilled, (state, action) => {
                state.productDetails = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(updatedProductStock.rejected, (state, action) => {
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
            .addCase(addReview.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            }).addCase(addReview.fulfilled, (state, action) => {
                state.isReviewAdded = true;
                state.status = STATUSES.IDLE;
            })
            .addCase(addReview.rejected, (state, action) => {
                state.error = action.error.message;
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
export const getProductDetails = createAsyncThunk('productDetails/fetch', async ({ id }) => {
    try {
        const response = await axios.get(`/api/v1/product/${id}`);
        return response.data.product;
    } catch (error) {
        throw error.response.data;
    }
});
export const updatedProductStock = createAsyncThunk('products/updateproductstock', async ({ newStock, productId }) => {
    const response = await axios.put(`/api/v1/product/updatestock/${productId}`, { newStock });
    return response.data.product;
})
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
});
export const deleteProduct = createAsyncThunk('products/deleteproduct', async ({ productId }) => {
    try {
        console.log({ productId });
        await axios.delete(`/api/v1/admin/product/${productId}`);
    } catch (error) {
        throw error.response.data;
    }
})
export const addReview = createAsyncThunk(
    'products/addReview',
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
export const { resetError, resetIsReviewAdded } = productSlice.actions;