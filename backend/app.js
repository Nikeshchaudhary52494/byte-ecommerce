const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
// importing routes
const ErrorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const cart = require("./routes/cartRoutes");
//using routes
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", cart);

// MiddleWare for error
app.use(ErrorMiddleware);
module.exports = app;
