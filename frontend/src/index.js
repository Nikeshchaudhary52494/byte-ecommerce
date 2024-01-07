import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./store/store";
import { fetchProducts } from "./slices/productSlice/productsSlice";
import { loadUser } from "./slices/userSlice/userSlice";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="bottom-center"
        limit={1}
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)