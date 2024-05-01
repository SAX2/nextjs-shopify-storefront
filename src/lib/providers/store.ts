import { create } from 'zustand'

interface CartState {
  totalItems?: number
  cart?: {
    id: string,
    isEmpty: boolean,
    items: any[],
    totalItems: number,
    totalPrice: number,
    totalUniqueItems: number,
  },
  addToCart?: (item: any) => void;
  countOfProducts?: (id: string) => void;
  removeItem?: (id: string) => void;
  substractItem?: (id: any) => void;
  addItem?: (id: any) => void;
  clearCart?: (id: any) => void;
}

export const useStore = create<CartState>(() => ({
}))