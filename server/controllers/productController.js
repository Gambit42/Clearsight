const productSchema = require("../models/productModel");

exports.addProduct = async (req, res) => {
  const {
    title,
    author,
    imageURL,
    genre,
    price,
    previousPrice,
    isOnSale,
    numberOfSales,
  } = req.body;

  try {
    const product = await productSchema.create({
      title,
      author,
      price,
      genre,
      imageURL,
      previousPrice,
      isOnSale,
      numberOfSales,
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

exports.findAllProducts = async (req, res) => {
  try {
    const products = await productSchema.find();

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.findProductsByCategory = async (req, res) => {
  const { category, limit, page } = req.body;
  let skip = 0;
  if (page) {
    skip = limit * (page - 1);
  }

  //Find all products
  if (category === "all") {
    try {
      const products = await productSchema.find().limit(limit).skip(skip);
      const productCount = await productSchema.countDocuments();

      res.status(200).json({
        success: true,
        data: products,
        count: productCount,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }

  //Find Best Sellers
  else if (category === "best-sellers") {
    try {
      const products = await productSchema
        .find()
        .sort({ numberOfSales: -1 })
        .limit(limit);

      res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
  //Find New Arrivals
  else if (category === "new-arrivals") {
    try {
      const products = await productSchema
        .find()
        .sort({ createdAt: -1 })
        .limit(limit);

      res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
  //Find Genres
  else {
    try {
      const products = await productSchema
        .find({ genre: category })
        .limit(limit)
        .skip(skip);

      const productCount = await productSchema.countDocuments({
        genre: category,
      });

      res.status(200).json({
        success: true,
        data: products,
        count: productCount,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
};
