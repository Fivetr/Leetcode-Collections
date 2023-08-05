import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: string;
};

const initialState: InitialState = {
  value: "Hashing",
};

export const CurrentCategory = createSlice({
  name: "CurrentCategory",
  initialState,
  reducers: {
    SetValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { SetValue } = CurrentCategory.actions;
export default CurrentCategory.reducer;
