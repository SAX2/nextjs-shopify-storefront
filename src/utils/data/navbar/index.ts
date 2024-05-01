import { getCollections } from "@/lib/shopify/queries"
import { Cart, Collection } from "./types"

export const collections: Collection[] = [
  {
    id: "",
    handle: "new-arrivals",
    title: "NEW ARRIVALS"
  },
  {
    id: "",
    handle: "outerwear",
    title: "OUTERWEAR"
  },
  {
    id: "",
    handle: "shirts",
    title: "SHIRTS"
  },
  {
    id: "",
    handle: "tops",
    title: "TOPS"
  },
  {
    id: "",
    handle: "knitwear",
    title: "KNITWEAR"
  },
  {
    id: "",
    handle: "denim",
    title: "DENIM"
  },
  {
    id: "",
    handle: "pants",
    title: "PANTS"
  },
  {
    id: "",
    handle: "shorts",
    title: "SHORTS"
  },
  {
    id: "",
    handle: "tees",
    title: "TEES"
  },
  {
    id: "",
    handle: "sweats",
    title: "SWEATS"
  },
  {
    id: "",
    handle: "headwear",
    title: "HEADWEAR"
  },
  {
    id: "",
    handle: "eyegear",
    title: "EYEGEAR"
  },
  {
    id: "",
    handle: "accessories",
    title: "ACCESSORIES"
  },
  {
    id: "",
    handle: "all",
    title: "ALL"
  },
]

export const navbar = [
  {
    title: "SHOP",
    path: "/collections/new-arrivals",
  },
  {
    title: "FEATURES",
    path: "/blog/features"
  },
]

export const cart: Cart = {
  id: "1",
  cost: {
    subtotalAmount: {
      amount: 1350.00,
      currencyCode: 'USD'
    }
  },
  lines: {
    edges: [
      {
        node: {
          id: "12",
          quantity: 2,
          cost: {
            totalAmount: {
              amount: 900.00,
              currencyCode: "USD" 
            }
          },
          merchandise: {
            image: {
              width: 1920,
              url: "https://www.stussy.com/cdn/shop/files/A83240000_TOFU_1.jpg?v=1713212594&width=1920",
              altText: "STÜSSY & LEVI'S LEATHER TRUCKER JACKET"
            },
            title: "TOFU",
            selectedOptions: {
              values: "XS"
            },
            product: {
              id: "a83240000",
              title: "STÜSSY & LEVI'S LEATHER TRUCKER JACKET",
            }
          }
        },
      },
      {
        node: {
          id: "123",
          quantity: 1,
          cost: {
            totalAmount: {
              amount: 450.00,
              currencyCode: "USD" 
            }
          },
          merchandise: {
            image: {
              width: 1920,
              url: "https://www.stussy.com/cdn/shop/files/A83260001_BLBR_1_c3859534-85d6-4a10-87a6-9105e2e27144.jpg?v=1713373096&width=1920",
              altText: "STÜSSY & LEVI'S CRISPY RINSE TRUCKER JACKET"
            },
            title: "BLACK/BROWN",
            selectedOptions: {
              values: "XS"
            },
            product: {
              id: "a83240000",
              title: "STÜSSY & LEVI'S CRISPY RINSE TRUCKER JACKET",
            }
          }
        },
      },
    ]
  }
}