import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/UI/Notification";
import { uiSliceAction } from "../store/ui-slice";

let firstRender = true;

export default function App() {
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  console.log(notification);

  const dispatch = useDispatch();

  const sendRequest = async () => {
    //send state as sending req
    dispatch(
      uiSliceAction.setShowNotification({
        message: "Sending...",
        type: "warning",
        open: true,
      }),
    );
    const res = await fetch(
      "https://redux-38a63-default-rtdb.firebaseio.com/cartItems.json",
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(cart),
      },
    );
    const data = await res.json();
    //send state as request is successful
    dispatch(
      uiSliceAction.setShowNotification({
        message: "Sent!",
        type: "success",
        open: true,
      }),
    );
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }

    sendRequest().catch((err) => {
      //send state as error
      dispatch(
        uiSliceAction.setShowNotification({
          message: "Something went wrong!",
          type: "error",
          open: true,
        }),
      );
    });
  }, [cart]);

  console.log(cart);

  return (
    <>
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          open={notification.open}
        />
      )}
      <div id="cart-modal"></div>
      {!isLoggedin && <Auth />}
      {isLoggedin && <Layout />}
    </>
  );
}
