const express = require("express");
const {
  registerUser,
  loginUser,
  userAccess,
  userForgotPassword,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/access", userAccess);
router.post("/forgot-password", userForgotPassword);

module.exports = router;
