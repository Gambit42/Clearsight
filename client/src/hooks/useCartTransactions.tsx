import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "src/contexts/AuthContext";
import CartContext from "src/contexts/CartContext";

type Props = {
  productId: string;
  quantity: number;
};

const useCartTransactions = (props: Props) => {
  const { productId, quantity } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext) || {};
  const { setCartData, setCartCount } = useContext(CartContext) || {};

  const handleGetCart = async (userId: string) => {
    try {
      const {
        data: { data },
      } = await axios.post("http://localhost:4000/cart/get", {
        userId,
      });

      setCartCount?.(handleGetCartCount(data.items));
      setCartData?.(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetCartCount = (items: any) => {
    return items.reduce((accumulator: number, currentValue: any) => {
      return accumulator + currentValue.quantity;
    }, 0);
  };

  const handleCartTransactions = async () => {
    setIsLoading(true);
    try {
      const {
        data: { data },
      } = await axios.post("http://localhost:4000/cart/add", {
        userId: user?._id,
        productId,
        quantity,
      });

      handleGetCart(data.userId);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return {
    handleCartTransactions,
    isLoading,
  };
};

export default useCartTransactions;
