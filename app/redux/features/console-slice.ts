import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: boolean;
};

const initialState: InitialState = {
  value: false,
};

export const ConsoleState = createSlice({
  name: "ConsoleState",
  initialState,
  reducers: {
    openConsole: (state) => {
      state.value = true;
    },
    closeConsole: () => {
      return initialState;
    },
  },
});

export const { openConsole, closeConsole } = ConsoleState.actions;
export default ConsoleState.reducer;
