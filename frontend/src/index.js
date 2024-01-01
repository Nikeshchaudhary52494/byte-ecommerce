import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./store/store";
import { fetchProducts } from "./slices/productSlice/productsSlice";
import { loadUser } from "./slices/userSlice/userSlice";
store.dispatch(fetchProducts());
store.dispatch(loadUser());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)