import { Variant, Price, Product } from "../products/types";

export type Collection = {
  id: string;
  title?: string;
  handle?: string;
}

export type CartLine = {
  id?: string;
  quantity?: number;
  cost?: {
    totalAmount: Price
  }
  merchandise?: Variant & { product?: Product }
}

export type Cart = {
  id?: string;
  lines?: {
    edges: {
      node?: CartLine
    }[]
  };
  cost?: {
    totalAmount?: Price
    subtotalAmount?: Price
    totalTaxAmount?: Price
    totalDutyAmount?: Price
  };
  checkoutUrl?: string;
}