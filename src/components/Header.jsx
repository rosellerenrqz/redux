import React from "react";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

export default function Header() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.Logout());
  };
  return (
    <header>
      <nav className="mb-10 p-6 shadow-lg">
        <ul className="mx-auto flex w-full flex-row items-center justify-between">
          <li className="text-xl font-medium sm:text-2xl">
            Redux Shopping App
          </li>
          <li className="flex items-center gap-5">
            <Cart />
            <button
              onClick={logoutHandler}
              className="rounded-lg bg-orange-400 px-2 py-1 text-lg font-medium text-white hover:bg-orange-300 sm:px-4 sm:py-2 sm:text-xl"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
