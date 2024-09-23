import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(
  devtools((set) => ({
    cartItems: [],
    addProduct: (name, price) =>
      set((state) => ({
        cartItems: [
          ...state.cartItems,
          { id: Date.now(), name, price, quantity: 1 },
        ],
      })),
    increaseQuantity: (id) =>
      set((state) => ({
        cartItems: state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      })),
    decreaseQuantity: (id) =>
      set((state) => ({
        cartItems: state.cartItems.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      })),
    removeProduct: (id) =>
      set((state) => ({
        cartItems: state.cartItems.filter((item) => item.id !== id),
      })),
  }))
);

export default useCartStore;
