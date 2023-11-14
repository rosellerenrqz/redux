import React from "react";
import Cart from "./Cart";

export default function Header() {
  return (
    <header>
      <nav className="mb-10 p-6 shadow-lg">
        <ul className="mx-auto flex w-full flex-row items-center justify-between">
          <li className="text-xl font-medium sm:text-2xl">
            Redux Shopping App
          </li>
          <Cart />
        </ul>
      </nav>
    </header>
  );
}
