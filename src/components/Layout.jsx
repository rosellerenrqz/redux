import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

export default function Layout() {
  const cartActions = useSelector((state) => state.cart.showCart);
  const total = 100;
  return (
    <>
      <Header />
      <Products />
      {cartActions && <CartItems />}
      <div className="my-10 px-6 text-right">
        <h3 className="text-lg font-medium sm:text-xl">Total: ${total}</h3>
        <button className="my-2 rounded-lg bg-orange-400 px-4 py-2 font-medium text-white hover:bg-orange-500">
          Place Order
        </button>
      </div>
    </>
  );
}
