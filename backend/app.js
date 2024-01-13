const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const ErrorMiddleware = require("./middleware/error");
const fileUpload = require("express-fileupload");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use(cors({
    origin: `${process.env.FRONTEND_BASE_URL}`, 
    credentials: true,
}));

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const cart = require("./routes/cartRoutes");
const contactUs = require("./routes/contactUsRoutes");
const home = require("./routes/homeRoute");

//using routess
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", cart);
app.use("/api/v1", contactUs);
app.use("/", home);

// MiddleWare for error
app.use(ErrorMiddleware);
module.exports = app;
