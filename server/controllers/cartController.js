const cartSchema = require("../models/cartModel");
const productSchema = require("../models/productModel");

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
      //get the index of the product
      const productIndex = cart.items.findIndex(
        (elem) => elem.productId == productId
      );

      //check if product exist inside the cart
      if (productIndex !== -1) {
        //check product exist inside the cart and the quantity IS zero or less than
        if (quantity <= 0) {
          const newCart = await cartSchema.findOneAndUpdate(
            {
              userId,
              items: { $elemMatch: { productId } },
            },
            {
              $pull: {
                items: {
                  productId,
                },
              },
              $set: {
                totalCost: handleSum(cart.items),
              },
            },
            { new: true }
          );

          return res.status(200).json({
            success: true,
            msg: "product and cart exist and quantity is zero or less than",
            data: newCart,
          });
        }

        //if product exist inside the cart and the quantity is NOT zero or less than
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
          msg: "Product and cart exist and quantity is not zero",
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
            totalCost: handleSum(cart.items) + Number(product.price) * quantity,
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
        data: newCart,
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

exports.getCart = async (req, res) => {
  const { userId } = req.body;

  try {
    const cart = await cartSchema.findOne({ userId });
    return res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
