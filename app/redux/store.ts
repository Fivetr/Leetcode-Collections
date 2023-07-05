import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import categoryReducer from "./features/category-nav-slice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    CurrentCategory: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
