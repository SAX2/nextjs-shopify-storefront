"use client";

import React from 'react'
import { useCartStore } from "../../lib/providers/cart/store";

const BagTitle = () => {
  const { count } = useCartStore();

  console.log(count)

  return <div>BAG ({count()})</div>;
}

export default BagTitle