const express = require("express");
const { handleAddToCart, getCart } = require("../controllers/cartController");

const router = express.Router();

router.post("/add", handleAddToCart);
router.post("/get", getCart);

module.exports = router;
