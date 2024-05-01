type Image = {
  id?: string;
  altText?: string;
  height?: number;
  width?: number;
  url?: string;
  src?: string;
}

export type Price = {
  amount: number;
  currencyCode?: string;
}

export type Variant = {
  id?: string;
  image?: Image;
  title?: string;
  currentlyNotInStock?: boolean;
  options?: {   
    id?: string; 
    name?: string; 
    values?: string[];
  }
  selectedOptions?: {   
    id?: string; 
    name?: string; 
    values?: string;
  }
}

export type Product = {
  id: string;
  title?: string;
  description?: string;
  handle?: string;
  updatedAt?: string;
  tags?: string[];
  featuredImage?: Image
  priceRangeV2?: {
    minVariantPrice?: Price
    maxVariantPrice?: Price
  }
  images?: {
    edges: {
      node: Image
    }[]
  };
  variants?: {
    edges: {
      node: Variant
    }[];
  };
  totalInventory?: number;
  inCollection?: boolean | {
    id: string;
  },
}