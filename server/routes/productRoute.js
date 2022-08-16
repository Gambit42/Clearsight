const express = require("express");
const {
  addProduct,
  findAllProducts,
  findProductsByCategory,
} = require("../controllers/productController");

const router = express.Router();

router.post("/create", addProduct);
router.post("/all", findAllProducts);
router.post("/genre", findProductsByCategory);

module.exports = router;
