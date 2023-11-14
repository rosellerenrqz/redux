import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function () {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCart = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <button
      onClick={toggleCart}
      className="rounded-lg border p-2 text-lg font-medium sm:p-3 sm:text-xl"
    >
      <h3>Cart: {quantity} items</h3>
    </button>
  );
}
