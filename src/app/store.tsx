import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import badgeReducer from "./badgeSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    badge: badgeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
