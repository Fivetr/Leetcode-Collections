import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isOpen: boolean;
  type: "login" | "forgetpassword" | "register";
};

type InitialState = {
  value: AuthState;
};

const initialState = {
  value: {
    isOpen: false,
    type: "login",
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    open: (state) => {
      state.value.isOpen = true;
      state.value.type = "login";
    },
    close: () => {
      return initialState;
    },
    ChangeAuthMenu: (
      state,
      action: PayloadAction<"login" | "forgetpassword" | "register">
    ) => {
      state.value.type = action.payload;
    },
    close_test_: (state) => {
      state.value.isOpen = false;
      state.value.type = "login";
    },
    close_test__: (state) => {
      return {
        value: {
          isOpen: false,
          type: "login",
        },
      };
    },
  },
});

export const { open, close, ChangeAuthMenu } = auth.actions;
export default auth.reducer;
