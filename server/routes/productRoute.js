const express = require("express");
const { addProduct } = require("../controllers/productController");

const router = express.Router();

router.post("/create", addProduct);

module.exports = router;
