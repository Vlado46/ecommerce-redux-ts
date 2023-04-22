import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  value: number;
}

const initialState: IInitialState = {
  value: 0,
};

const badgeSlice = createSlice({
  name: "badge",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    emptyCart: (state) => {
      state.value = 0;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = badgeSlice.actions;

export default badgeSlice.reducer;
