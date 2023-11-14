import React from "react";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

export default function App() {
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const cart = useSelector((state) => state.cart);
  console.log(isLoggedin);
  console.log(cart);

  return (
    <>
      <div id="cart-modal"></div>
      {!isLoggedin && <Auth />}
      {isLoggedin && <Layout />}
    </>
  );
}
