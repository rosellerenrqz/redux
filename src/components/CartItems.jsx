import React from "react";
import Modal from "../components/UI/Modal";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function CartItems() {
  const itemsLists = useSelector((state) => state.cart.items);
  console.log(itemsLists);

  const itemData = (
    <p className="my-5 text-center text-lg">No Items Available!</p>
  );
  return (
    <Modal>
      <div className="w-full">
        <h1 className="py-5 text-center text-lg font-bold sm:text-xl">
          Your Cart
        </h1>
        <ul>
          {/* {itemsLists.length === 0 ? (
            itemData
          ) : ( */}
          <li className="flex flex-col gap-5">
            {itemsLists.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                total={item.totalPrice}
              />
            ))}
          </li>
          {/* )} */}
        </ul>
      </div>
    </Modal>
  );
}
