const productSchema = require("../models/productModel");

exports.addProduct = async (req, res) => {
  const { title, author, imageURL, genre, price, previousPrice, isOnSale } =
    req.body;

  try {
    const product = await productSchema.create({
      title,
      author,
      price,
      genre,
      imageURL,
      previousPrice,
      isOnSale,
    });

    product.save();
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.findProducts = async (req, res) => {
  const { title, author, imageURL, genre, price, previousPrice, isOnSale } =
    req.body;

  try {
    const product = await productSchema.create({
      title,
      author,
      price,
      genre,
      imageURL,
      previousPrice,
      isOnSale,
    });

    product.save();
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
