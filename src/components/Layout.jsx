import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

export default function Layout() {
  const cartActions = useSelector((state) => state.cart.showCart);
  return (
    <>
      <Header />
      <Products />
      {cartActions && <CartItems />}
    </>
  );
}
