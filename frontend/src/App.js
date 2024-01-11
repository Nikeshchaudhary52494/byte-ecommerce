import Layout from "./component/layout/Layout";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js"
import Cart from "./component/Cart/Cart.js"
import React, { Component, useEffect } from "react";
import Products from "./component/Product/Products.js"
import CategoriesPage from "./component/Product/CategoryPage.js"
import Login from "./component/User/Login.js"
import SignUp from "./component/User/SignUp.js"
import Dashbord from "./component/admin/Dashbord.js";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./component/User/UserProfile.js"
import MangeUser from "./component/admin/manageUsers/MangeUsers.js";
import Manageproduct from "./component/admin/manageProduct/Manageproduct.js";
import AddProduct from "./component/admin/manageProduct/AddProduct.js";
import ShippingForm from "./component/Cart/ShippingForm.js";
import ManageOrders from "./component/admin/manageOrders/ManageOrders.js";
import ManageSingleUser from "./component/admin/manageUsers/ManageSingleUser.js";
import ManageSingleOrder from "./component/admin/manageOrders/ManageSingleOrder.js";
import ManageReviews from "./component/admin/manageReviews/ManageReviews.js";
import ManageSingleProduct from "./component/admin/manageProduct/ManageSingleProduct.js";
import EditProduct from "./component/admin/manageProduct/UpdateProduct.js";
import UpdateUserProfile from "./component/User/UpdateUserProfile.js";
import ShippingInfo from "./component/Cart/ShippingInfo.js";
import PaymentSucessfull from "./component/Cart/PaymentSucessfull.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgetPassword from "./component/User/ForgetPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Myorders from "./component/User/Myorders.js";
import SingleOrder from "./component/User/SingleOrder.js";
import VerifyUser from "./component/User/VerifyMessage.js";
import AboutMe from "./component/aboutUs/AboutMe.js";
import ContactUs from "./component/contactUs/ContactUs.js";
import PageNotFound from "./component/layout/PageNotFound.js";
import store from "./store/store.js";
import { fetchProducts } from "./slices/productSlice/productsSlice.js";
import { loadUser, updateUserProfile } from "./slices/userSlice/userSlice.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import ManageUsers from "./component/admin/manageUsers/MangeUsers.js";

function App() {
  useEffect(() => {
    store.dispatch(fetchProducts());
    store.dispatch(loadUser());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/catogries" element={<CategoriesPage />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" >
          <Route index element={<Cart />} />
          <Route path="checkout" element={<ProtectedRoute Component={ShippingForm} />} />
          <Route path="shippinginfo" element={<ProtectedRoute Component={ShippingInfo} />} />
          <Route path="orderplaced" element={<PaymentSucessfull />} />
        </Route>
        <Route path="products/:keyword" element={<Products />} />
        <Route path="products" element={<Products />}>
        </Route>
        < Route path="user" >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<ProtectedRoute Component={UserProfile} />} />
          <Route path="updateprofile" element={<ProtectedRoute Component={UpdateUserProfile} />} />
          <Route path="updatepassword" element={<ProtectedRoute Component={UpdatePassword} />} />
          <Route path="password/forget" element={<ForgetPassword />} />
          <Route path="verify" element={<VerifyUser />} />
        </Route>
        <Route path="myorders" element={<ProtectedRoute Component={Myorders} />} />
        <Route path="order/:id" element={<ProtectedRoute Component={SingleOrder} />} />
        <Route path="password/reset/:token" element={<ProtectedRoute Component={ResetPassword} />} />
        <Route path='admin'>
          <Route path="dashbord" element={<ProtectedRoute Component={Dashbord} adminOnly={true} />} />
          <Route path="manageuser" element={<ProtectedRoute Component={MangeUser} adminOnly={true} />} />
          <Route path="user/:id" element={<ProtectedRoute Component={ManageSingleUser} adminOnly={true} />} />
          <Route path="manageproduct">
            <Route index element={<ProtectedRoute Component={Manageproduct} adminOnly={true} />} />
            <Route path="addproduct" element={<ProtectedRoute Component={AddProduct} adminOnly={true} />} />
            <Route path="editproduct" element={<ProtectedRoute Component={EditProduct} adminOnly={true} />} />
          </Route>
          <Route path="product/:id" element={<ProtectedRoute Component={ManageSingleProduct} adminOnly={true} />} />
          <Route path="manageorder" element={<ProtectedRoute Component={ManageOrders} adminOnly={true} />} />
          <Route path="order/:id" element={<ProtectedRoute Component={ManageSingleOrder} adminOnly={true} />} />
          <Route path="managereviews" element={<ProtectedRoute Component={ManageReviews} adminOnly={true} />} />
        </Route>
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="contactus" element={<ProtectedRoute Component={ContactUs} />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
