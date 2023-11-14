import React from "react";
import { Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { uiSliceAction } from "../../../store/ui-slice";

export default function Notification({ type, message }) {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      uiSliceAction.setShowNotification({
        open: false,
      }),
    );
  };

  return (
    <div>
      {notification.open && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
}
