const express = require("express");
const { handleAddToCart } = require("../controllers/cartController");

const router = express.Router();

router.post("/add", handleAddToCart);

module.exports = router;
