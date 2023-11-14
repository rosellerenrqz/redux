import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function () {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCart = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <button onClick={toggleCart} className="relative p-4">
      <FaShoppingCart
        size={30}
        className="hover:opacity-80 active:opacity-60"
      />
      <div className="absolute right-0 top-0 rounded-full bg-gray-200 px-2 text-xl font-bold text-blue-500">
        {quantity}
      </div>
    </button>
  );
}
