import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/productSlice/productsSlice';
import productDetailsReducer from '../slices/productSlice/productDetailsSlice';
import filterReducer from '../slices/filterSlice/filterSlice'
const store = configureStore({
    reducer: {
        products: productsReducer,
        productDetails: productDetailsReducer,
        filter: filterReducer,
    },
});

export default store;