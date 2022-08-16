const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: [{ type: String }],
    imageURL: {
      type: String,
    },
    genre: [{ type: String }],
    price: { type: Number },
    previousPrice: { type: Number },
    isOnSale: { type: Boolean },
    numberOfSales: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
