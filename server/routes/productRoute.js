const express = require("express");
const { addProduct, getProducts } = require("../controllers/productController");

const router = express.Router();

router.post("/create", addProduct);
router.post("/get", getProducts);

module.exports = router;
