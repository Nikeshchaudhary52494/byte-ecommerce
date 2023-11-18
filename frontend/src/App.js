import Layout from "./component/layout/Layout";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js"
import Cart from "./component/Cart/Cart.js"
import React from "react";
import Products from "./component/Product/Products.js"
import CategoriesPage from "./component/Product/CategoryPage.js"
import Login from "./component/User/Login.js"
import SignUp from "./component/User/SignUp.js"

import { Route, Routes } from "react-router-dom";
import UserProfile from "./component/User/UserProfile.js"

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
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
