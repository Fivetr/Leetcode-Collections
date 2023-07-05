import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProblemCategory } from "../../../leetcode_problems/problems";

type InitialState = {
  value: ProblemCategory;
};

const initialState: InitialState = {
  value: "All",
};

export const CurrentCategory = createSlice({
  name: "CurrentCategory",
  initialState,
  reducers: {
    SetValue: (state, action: PayloadAction<ProblemCategory>) => {
      state.value = action.payload;
    },
  },
});

export const { SetValue } = CurrentCategory.actions;
export default CurrentCategory.reducer;
