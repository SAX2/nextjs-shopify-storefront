'use client';

import React from 'react'
import { useCartStore } from "@/app/(example)/lib/providers/cart/store";
import { Product } from '@/utils/data/products/types';

const Button = ({ type, product }: { type: 'bag' | 'checkout' | 'sold-out', product?: Product, productId?: string }) => {

  if (!product) return;

  return (
    <>
      {type === "sold-out" && (
        <button
          className="w-full border border-black font-semibold p-4 bg-gray-100"
          disabled
        >
          SOLD OUT
        </button>
      )}
      {type === "bag" && <AddToBag item={product}  />}
      {type === "checkout" && <Checkout />}
    </>
  );
}

const AddToBag = ({ item }: { item: Product }) => {
  const { add } = useCartStore();

  return (
    <button
      className="w-full text-white bg-black font-semibold p-4 text-center"
      onClick={() => add(item)}
    >
      ADD TO BAG
    </button>
  );
};

const Checkout = () => {
  return (
    <button className="w-full border border-black font-semibold p-4">
      CHECKOUT
    </button>
  );
}

export default Button