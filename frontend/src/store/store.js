import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/productSlice/productsSlice';
import productDetailsReducer from '../slices/productSlice/productDetailsSlice';
import filterReducer from '../slices/filterSlice/filterSlice'
import userReducer from "../slices/userSlice/userSlice"
import cartReducer from "../slices/cartSlice/cartSlice"
const store = configureStore({
    reducer: {
        products: productsReducer,
        productDetails: productDetailsReducer,
        filter: filterReducer,
        user: userReducer,
        cart: cartReducer,
    },
});

export default store;