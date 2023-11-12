import Layout from "./component/layout/Layout";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js"
import Cart from "./component/Cart/Cart.js"
import React from "react";
import Products from "./component/Product/Products.js"
import Categories from "./component/Product/Categories.js"
import Login from "./component/User/Login.js"
import SignUp from "./component/User/SignUp.js"
import Filter from "./component/Product/productFilter.js"

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route exact path="/" Component={Home} />
    //     <Route exact path="/product/:id" Component={ProductDetails} />
    //   </Routes>
    //   <Footer />
    // </Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/catogries" element={<Categories />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products/:keyword" element={<Products />} />
        <Route path="products" >
          <Route path="filter" element={<Filter />} />
        </Route>
        < Route path="user" >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        {/* <Route path="products" element={<Products />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
