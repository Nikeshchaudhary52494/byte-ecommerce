import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { positions, transitions, Provider as AlerProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import store from "./store/store";
// const alertOptions = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
//   transition: transitions.FADE,
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// <Provider store={store}>
//     <AlerProvider template={AlertTemplate} {...alertOptions}>
//       <App />
//     </AlerProvider>
//     </Provider>
// );


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