"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Login from "./Login";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { close } from "@/app/redux/features/auth-slice";
import { useCloseAuthLayout } from "../../hooks/useCloseAuthLayout";

function AuthLayOut() {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth.value);
  const closeLayout = useCloseAuthLayout();

  return (
    <>
      {/* background */}
      <div
        className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-60"
        onClick={closeLayout}
      ></div>
      {/* form container */}
      <div className="absolute left-[50%] top-[50%] flex w-[20rem] translate-x-[-50%] translate-y-[-50%] items-center justify-center sm:w-[26rem] short:w-[18rem]">
        <div className="relative mx-auto flex h-full w-full items-center justify-center">
          <div className="relative mx-6 w-full rounded-lg bg-white bg-gradient-to-b from-cyan-100 via-cyan-200 to-cyan-400 shadow">
            <div className="flex justify-end p-2">
              {/* close button */}
              <button
                type="button"
                className="text-md ml-auto inline-flex items-center rounded-lg bg-transparent p-1"
                onClick={() => dispatch(close())}
              >
                <AiOutlineClose className="h-5 w-5 duration-300 hover:scale-150" />
              </button>
            </div>
            {/* render different form based on auth state; login | register | forgetpassword */}
            {auth.type === "login" ? (
              <Login />
            ) : auth.type === "register" ? (
              <Register />
            ) : (
              <ForgetPassword />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthLayOut;
