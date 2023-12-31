const express = require("express");
const {
  isAuthenticatedUser,
  authorizeRole
} = require("../middleware/auth");
const {
  createNewOrder,
  getSingleOrder,
  myOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderControler");
const router = express.Router();
router.route("/order/new").post(isAuthenticatedUser, createNewOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrder);
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRole("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRole("admin"), updateOrder)
  .delete(isAuthenticatedUser, deleteOrder, authorizeRole("admin"));

module.exports = router;
