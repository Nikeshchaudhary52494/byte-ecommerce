import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';
import productsReducer from '../slices/productSlice/productsSlice';
import productDetailsReducer from '../slices/productSlice/productDetailsSlice';
const store = configureStore({
    reducer: {
        products: productsReducer,
        productDetails:productDetailsReducer
    },
});

export default store;