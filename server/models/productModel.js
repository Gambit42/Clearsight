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
    popularity: { type: Number },
    genre: [{ type: String }],
    price: { type: Number },
    previousPrice: { type: Number },
    isOnSale: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
