import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function CartItem({ id, price, name, total, quantity }) {
  const dispatch = useDispatch();

  const increaseItemQuantity = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
        quantity,
        total,
      }),
    );
  };

  const decreaseItemQuantity = () => {
    dispatch(cartActions.removeToCart(id));
  };
  return (
    <>
      <div className="rounded-lg bg-gray-50 p-4 text-lg">
        <h2>Item Name: {name}</h2>
        <div className="flex gap-3">
          <p>${price}</p>
          <p>x{quantity}</p>
        </div>
        <article>Total: ${total}</article>
        <button
          onClick={decreaseItemQuantity}
          className="mx-1 mt-3 rounded-lg bg-red-400 px-2 text-lg font-medium hover:opacity-70 active:opacity-50"
        >
          -
        </button>
        <button
          onClick={increaseItemQuantity}
          className="mx-1 mt-3 rounded-lg bg-blue-400 px-2 text-lg font-medium hover:opacity-70 active:opacity-50"
        >
          +
        </button>
      </div>
    </>
  );
}
