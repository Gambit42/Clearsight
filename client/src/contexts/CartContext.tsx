import { createContext } from "react";

type CartData = {
  items: CartItems[];
  totalCost: number;
};

type CartItems = {
  title: string;
  author: string;
  image?: string | undefined;
  price: number;
  quantity: number;
};

type CartProps = {
  cartData: CartData;
  cartCount: number;
  setCartCount: (value: number) => void;
  setCartData: (value: any) => void;
};

const CartContext = createContext<CartProps | null>(null);

export default CartContext;
