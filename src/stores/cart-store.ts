import { createStore } from "zustand/vanilla";

import { CartProduct, Product } from "@/types/product";

export type CartState = {
  isOpened: boolean;
  products: CartProduct[];
};

export type CartActions = {
  handleCartView: () => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  incrementProduct: (id: number) => void;
  decrementProduct: (id: number) => void;
};

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
  isOpened: false,
  products: [],
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()((set) => ({
    ...initState,
    handleCartView: () =>
      set((state) => ({
        isOpened: !state.isOpened,
      })),
    addProduct: (product) =>
      set((state) => {
        const existingProduct = state.products.find((p) => p.id === product.id);

        if (existingProduct) {
          return {
            products: state.products.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
            ),
          };
        }

        return {
          products: [...state.products, { ...product, quantity: 1 }],
        };
      }),
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
