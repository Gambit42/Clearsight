const express = require("express");
const { addProduct } = require("../controllers/product");

const router = express.Router();

router.post("/create", addProduct);

module.exports = router;
