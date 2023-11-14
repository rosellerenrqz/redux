import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

export default function CartModal({ children }) {
  const dispatch = useDispatch();

  const hideCart = () => {
    dispatch(cartActions.setShowCart());
  };

  return createPortal(
    <>
      <div
        onClick={hideCart}
        className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-20"
      />
      <dialog
        open
        className="left-auto right-0 top-0 z-50 flex h-screen w-[60%] overscroll-none bg-white p-3 sm:w-[40%] md:w-[35%] lg:w-[25%]"
      >
        {children}
      </dialog>
    </>,
    document.getElementById("cart-modal"),
  );
}
