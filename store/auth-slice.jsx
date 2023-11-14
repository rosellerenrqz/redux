import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedin: false },
  reducers: {
    Login(state) {
      state.isLoggedin = true;
    },
    Logout(state) {
      state.isLoggedin = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
