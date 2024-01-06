const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const ErrorMiddleware = require("./middleware/error");
const fileUpload = require("express-fileupload");
// const cryptoRandomString = require("crypto-random-string");

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const cart = require("./routes/cartRoutes");
const contactUs = require("./routes/contactUsRoutes");
//using routess
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", cart);
app.use("/api/v1", contactUs);

// MiddleWare for error
app.use(ErrorMiddleware);
module.exports = app;
