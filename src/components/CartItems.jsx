import React from "react";
import Modal from "../components/UI/Modal";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function CartItems() {
  const itemsLists = useSelector((state) => state.cart.items);

  let total = 0;

  //   itemsLists.forEach((item) => total += item.price)
  itemsLists.forEach((item) => (total += item.totalPrice));

  const itemData = (
    <p className="my-5 text-center text-lg">No Items Available!</p>
  );
  return (
    <Modal>
      <div className="flex h-full w-full flex-col">
        <h1 className="py-5 text-center text-lg font-bold sm:text-xl">
          Your Cart
        </h1>
        <div className="flex-1 overflow-y-auto">
          <ul className="bg-white">
            {itemsLists.length === 0 ? (
              itemData
            ) : (
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
            )}
          </ul>
        </div>
        {itemsLists.length > 0 && (
          <div className="my-10 px-6 text-right">
            <h3 className="text-lg font-medium sm:text-xl">Total: ${total}</h3>
            <button className="my-2 rounded-lg bg-blue-400 px-4 py-2 font-medium text-white hover:bg-blue-500">
              Place Order
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}
