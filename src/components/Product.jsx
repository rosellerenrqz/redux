import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function Product({ id, name, image, price }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };

  return (
    <div className="mx-auto max-w-[30rem] shadow-lg">
      <img
        src={image}
        alt={name}
        className="h-40 w-full rounded-t-md object-cover"
      />
      <div className="rounded-b-md bg-white p-4">
        <h2 className="mb-2 text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">${price}</p>
        <button
          onClick={addToCart}
          className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
