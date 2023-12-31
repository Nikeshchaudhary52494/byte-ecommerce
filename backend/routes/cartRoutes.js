const express = require("express");

const { isAuthenticatedUser } = require("../middleware/auth");

const {
    addProduct,
    removeProduct,
    getCartProducts
} = require("../controllers/cartControler");
const router = express.Router();

router.route("/cart/add").post(isAuthenticatedUser, addProduct);
router.route("/cart").get(isAuthenticatedUser, getCartProducts);
router.route("/cart/remove/:productId").delete(isAuthenticatedUser, removeProduct);

module.exports = router;
