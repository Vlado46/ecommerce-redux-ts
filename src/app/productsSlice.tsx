import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProducts {
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
  id: number;
  quantity: number;
  totalPrice: number;
}

interface IProductsState {
  value: IProducts[];
  totalCartPrice: number;
}

const initialState: IProductsState = {
  value: [],
  totalCartPrice: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<IProducts>) => {
      const newProduct = action.payload;

      const existingProduct = state.value.find(
        (prod) => prod.id === newProduct.id
      );
      if (!existingProduct) {
        state.value.push({
          price: newProduct.price,
          title: newProduct.title,
          description: newProduct.description,
          category: newProduct.category,
          image: newProduct.image,
          id: newProduct.id,
          quantity: 1,
          totalPrice: newProduct.price,
        });
        state.totalCartPrice += newProduct.price;
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice += newProduct.price;
        state.totalCartPrice += newProduct.price;
      }
    },
    removeProduct: (state, action: PayloadAction<IProducts>) => {
      const cartProduct = action.payload;
      const existingProduct = state.value.find(
        (prod) => prod.id === cartProduct.id
      );
      if (existingProduct?.quantity === 1) {
        state.value = state.value.filter((prod) => prod.id !== cartProduct.id);
        state.totalCartPrice -= cartProduct.price;
      } else {
        existingProduct!.quantity--;
        existingProduct!.totalPrice -= cartProduct.price;
        state.totalCartPrice -= cartProduct.price;
      }
    },
    removeAll: (state) => {
      state.totalCartPrice = 0;
      state.value = [];
    },
  },
});

export const { addProducts, removeProduct, removeAll } = productsSlice.actions;

export default productsSlice.reducer;
