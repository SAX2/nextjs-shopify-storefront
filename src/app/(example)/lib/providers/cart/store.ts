import { Product } from '@/utils/data/products/types';
import { create } from 'zustand';

export interface CartItem extends Product {
  count: number;
}

type CartStore = {
  cart: CartItem[];
  count: () => number;
  add: (product: Product) => void;
  remove: (idProduct: string) => void;
  removeAll: () => void;
};

const saveCartToLocalStorage = (cart: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const getCartFromLocalStorage = (): CartItem[] => {
  const cartFromStorage = localStorage.getItem('cart');
  return cartFromStorage ? JSON.parse(cartFromStorage) : [];
};

function updateCart(product: Product, cart: CartItem[]): CartItem[] {
  const cartItem = { ...product, count: 1 } as CartItem;
  const productOnCart = cart.map(item => item.id).includes(product.id);
  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map(item => {
      if (item.id === product.id) return { ...item, count: item.count + 1 } as CartItem;
      return item;
    });
  }
  return cart;
}

function removeCart(idProduct: string, cart: CartItem[]): CartItem[] {
  return cart
    .map(item => {
      if (item.id === idProduct) return { ...item, count: item.count - 1 };
      return item;
    })
    .filter(item => {
      return item.count;
    });
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: getCartFromLocalStorage(),
  count: () => {
    const { cart } = get();
    if (cart.length) return cart.map(item => item.count).reduce((prev, curr) => prev + curr);
    return 0;
  },
  add: (product: Product) => {
    const { cart } = get();
    const updatedCart = updateCart(product, cart);
    set({ cart: updatedCart });
    saveCartToLocalStorage(updatedCart);
  },
  remove: (idProduct: string) => {
    const { cart } = get();
    const updatedCart = removeCart(idProduct, cart);
    set({ cart: updatedCart });
    saveCartToLocalStorage(updatedCart);
  },
  removeAll: () => {
    set({ cart: [] });
    saveCartToLocalStorage([]);
  },
}));