const express = require("express");
const {
  registerUser,
  loginUser,
  userAccess,
  userInfo,
  userForgotPassword,
  userResetPassword,
  userLogout,
} = require("../controllers/userController");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/access", userAccess);
router.get("/info", auth, userInfo);
router.post("/forgot-password", userForgotPassword);
router.post("/reset-password", auth, userResetPassword);
router.post("/logout", userLogout);

module.exports = router;
