import { createStore } from "zustand/vanilla";

import { CartProduct, Product } from "@/types/product";

export type CartState = {
  products: CartProduct[];
};

export type CartActions = {
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  incrementProduct: (id: number) => void;
  decrementProduct: (id: number) => void;
};

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
  products: [],
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()((set) => ({
    ...initState,
    addProduct: (product) =>
      set((state) => ({
        products: [...state.products, { ...product, quantity: 1 }],
      })),
    removeProduct: (id) =>
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
      })),
    incrementProduct: (id) =>
      set((state) => ({
        products: state.products.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      })),
    decrementProduct: (id) =>
      set((state) => ({
        products: state.products
          .map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product,
          )
          .filter((product) => product.quantity > 0),
      })),
  }));
};
