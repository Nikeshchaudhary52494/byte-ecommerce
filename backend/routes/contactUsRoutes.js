const express = require("express");

const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");
const { createMessage, getAllMessages } = require("../controllers/contactUsControler");

const router = express.Router();


router
    .route("/contactus")
    .post(isAuthenticatedUser, createMessage);
router
    .route("/admin/messages")
    .get(isAuthenticatedUser, authorizeRole("admin"), getAllMessages);


module.exports = router;