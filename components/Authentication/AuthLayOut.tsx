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
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60"
        onClick={closeLayout}
      ></div>
      <div className="w-[20rem] sm:w-[26rem] short:w-[18rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
        <div className="relative w-full h-full mx-auto flex items-center justify-center">
          <div className="bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-cyan-100 via-cyan-200 to-cyan-400 mx-6">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="bg-transparent rounded-lg text-md p-1 ml-auto inline-flex items-center"
                onClick={() => dispatch(close())}
              >
                <AiOutlineClose className="w-5 h-5 hover:scale-150 duration-300" />
              </button>
            </div>
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
