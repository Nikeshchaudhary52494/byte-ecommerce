import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/productSlice/productsSlice';
import productDetailsReducer from '../slices/productSlice/productDetailsSlice';
import filterReducer from '../slices/filterSlice/filterSlice'
import userReducer from "../slices/userSlice/userSlice"
import cartReducer from "../slices/cartSlice/cartSlice"
import adminReducer from "../slices/adminSlice/adminSlice"
import ordersReducer from "../slices/orderSlice/orderSlice"
import contactUsReducer from "../slices/contactUsSlice/contactUsSlice"
const store = configureStore({
    reducer: {
        products: productsReducer,
        productDetails: productDetailsReducer,
        filter: filterReducer,
        user: userReducer,
        cart: cartReducer,
        admin: adminReducer,
        orders: ordersReducer,
        contactUs: contactUsReducer
    },
});

export default store;