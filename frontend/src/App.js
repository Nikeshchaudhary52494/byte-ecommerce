import Layout from "./component/layout/Layout";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js"
import Cart from "./component/Cart/Cart.js"
import React from "react";
import Products from "./component/Product/Products.js"
import CategoriesPage from "./component/Product/CategoryPage.js"
import Login from "./component/User/Login.js"
import SignUp from "./component/User/SignUp.js"
import Dashbord from "./component/admin/Dashbord.js";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./component/User/UserProfile.js"
import MangeUser from "./component/admin/manageUsers/MangeUsers.js";
import Manageproduct from "./component/admin/manageProduct/Manageproduct.js";
import AboutUs from "./component/aboutUs/aboutUs.js";
import ContactUs from "./component/contactUs/ContactUs.js";
import AddProduct from "./component/admin/manageProduct/AddProduct.js";
import UpDatePassword from "./component/User/UpDatePassword.js";
import ShippingForm from "./component/User/ShippingForm.js";
import ManageOrders from "./component/admin/manageOrders/ManageOrders.js";
import ManageSingleUser from "./component/admin/manageUsers/ManageSingleUser.js";
import ManageSingleOrder from "./component/admin/manageOrders/ManageSingleOrder.js";
import ManageReviews from "./component/admin/manageReviews/ManageReviews.js";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/catogries" element={<CategoriesPage />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products/:keyword" element={<Products />} />
        <Route path="products" element={<Products />}>
        </Route>
        < Route path="user" >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile">
            <Route index element={<UserProfile />} />
            <Route path="updatepassword" element={<ShippingForm />} />
          </Route>
          <Route path='admin'>
            <Route path="dashbord" element={<Dashbord />} />
            <Route path="manageuser" element={<MangeUser />} />
            <Route path="user/:id" element={<ManageSingleUser />} />
            <Route path="manageproduct">
              <Route index element={<Manageproduct />} />
              <Route path="addproduct" element={<AddProduct />} />
            </Route>
            <Route path="manageorder" element={<ManageOrders />} />
            <Route path="order/:id" element={<ManageSingleOrder />} />
            <Route path="managereviews" element={<ManageReviews />} />
          </Route>
        </Route>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
