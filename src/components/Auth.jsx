import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

export default function Auth() {
  const [value, setValue] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.username || !value.password) {
      alert("input should not be empty");
      return;
    }

    dispatch(authActions.Login());
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[30rem] rounded-lg bg-gray-100 p-5 text-center">
        <h1 className="mb-10 text-4xl">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 text-start"
        >
          <div>
            <label htmlFor="username" className="text-lg">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={value.username}
              onChange={(e) => setValue({ ...value, username: e.target.value })}
              className="my-2 w-full rounded-lg p-1"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={value.password}
              onChange={(e) => setValue({ ...value, password: e.target.value })}
              className="my-2 w-full rounded-lg p-1"
            />
          </div>
          <button className="rounded-lg bg-blue-400 p-2 text-white hover:bg-blue-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
