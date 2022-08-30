const cartSchema = require("../models/cartModel");
const productSchema = require("../models/productModel");
const mongoose = require("mongoose");

exports.handleAddToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    //Find product by id
    const product = await productSchema.findById(productId);

    //Check if cart exist
    const cart = await cartSchema.findOne({ userId });

    const handleSum = (items) => {
      filteredItems = items.filter((item) => !item.productId.equals(productId));
      return filteredItems.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
      }, 0);
    };

    if (cart) {
      //check if product exist inside the cart
      const productIndex = cart.items.findIndex(
        (elem) => elem.productId == productId
      );

      if (productIndex !== -1) {
        //if product exist inside the cart
        const newCart = await cartSchema.findOneAndUpdate(
          {
            userId,
            items: { $elemMatch: { productId } },
          },
          {
            $set: {
              "items.$.quantity": quantity,
              totalCost:
                handleSum(cart.items) + Number(product.price) * quantity,
            },
          },
          { new: true }
        );

        return res.status(200).json({
          success: true,
          msg: "product and cart exist",
          data: newCart,
        });
      }

      // if product doesnt exist inside the cart, add item
      const newCart = await cartSchema.findOneAndUpdate(
        {
          userId,
          productId: { $elemMatch: { productId } },
        },
        {
          $set: {
            totalCost: handleSum(cart.items),
          },
          $push: {
            items: {
              productId,
              quantity,
              price: product.price,
              title: product.title,
              author: product.author,
            },
          },
        },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        msg: "Cart exist but no product",
        // data: newCart,
      });
    }

    //If cart doesn't exist create one
    const newCart = await cartSchema.create({
      userId,
      items: [
        {
          productId,
          quantity,
          price: product.price,
          title: product.title,
          author: product.author,
        },
      ],
      totalCost: Number(product.price) * quantity,
    });

    return res.status(200).json({
      success: true,
      data: newCart,
      cost: product.price,
      quantity: quantity,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
