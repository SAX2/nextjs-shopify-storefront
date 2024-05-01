import storefront from ".";

const gql = String.raw;

export async function getStore() {
  const getShop = gql`
    query GetShop() {
      shop {
        id
      }
    }
  `;

  try {
    return await storefront({ query: getShop });
  } catch (error) {
    console.log(error)
  }
}

export const getCollections = async ({ limit = 8 }: { limit?: number }) => {
  const getCollections = gql`
    query GetCollections($handle: String!) {
      collections(first: $handle) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
  `;

  const variables = {
    handle: limit,
  };

  try {
    return await storefront({ query: getCollections, variables });
  } catch (error) {
    console.log(error)
  }
}
 
export async function getSingleProduct(productName: string) {
  const getSingleProductQuery = gql`
    query SingleProduct($handle: String!) {
      product(handle: $handle) {
        title
        description
        updatedAt
        tags
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 2) {
          edges {
            node {
              url
              altText
              height
              width
            }
          }
        }
        variants(first: 5) {
          edges {
            node {
              id
              title
              currentlyNotInStock
              image {
                url
                altText
                height
                width
              }
            }
          }
        }
        totalInventory
      }
    }
  `;

  const variables = {
    handle: productName,
  };

  try {
    return await storefront({ query: getSingleProductQuery, variables });
  } catch (error) {
    console.log(error)
  }
}

// export const getProductByVariant = (variantId: string)

export async function getProducts({ limit = 8 }: { limit?: number }) {
  const getSingleProductQuery = gql`
    query Products($handle: Int) {
      products(first: $handle) {
        edges {
          node {
            title
            priceRange {
              maxVariantPrice {
                amount
              }
            }
            images(first: 2) {
              edges {
                node {
                  url
                  altText
                  id
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    handle: limit,
  };

  try {
    return await storefront({ query: getSingleProductQuery, variables });
  } catch (error) {
    console.log(error)
  }
}

export async function getProductsByCategory({ limit = 8 }: { limit?: number }) {
  const getSingleProductQuery = gql`
    query Products($handle: Int) {
      products(first: $handle) {
        edges {
          node {
            title
            priceRange {
              maxVariantPrice {
                amount
              }
            }
            images(first: 2) {
              edges {
                node {
                  url
                  altText
                  id
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    handle: limit,
  };

  try {
    return await storefront({ query: getSingleProductQuery, variables });
  } catch (error) {
    console.log(error)
  }
}

export async function addToCart(itemId: string, quantity: string) {
  const createCartMutation = gql`
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        id
      }
    }
  }
`;

  const variables = {
    cartInput: {
      lines: [
        {
          quantity: parseInt(quantity),
          merchandiseId: itemId,
        },
      ],
    },
  };
  try {
    return await storefront({ query: createCartMutation, variables });
  } catch (error) {
    console.log(error)
  }
}

export async function updateCart(cartId: string, itemId: string, quantity: string) {
  const updateCartMutation = gql`
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
        }
      }
    }
  `;

  const variables = {
    cartId: cartId,
    lines: [
      {
        quantity: parseInt(quantity),
        merchandiseId: itemId,
      },
    ],
  };
  try {
    return await storefront({ query: updateCartMutation, variables });
  } catch (error) {
    console.log(error)
  }
}

export async function retrieveCart(cartId: string) {
  const cartQuery = gql`
    query cartQuery($cartId: ID!) {
      cart(id: $cartId) {
        id
        createdAt
        updatedAt

        lines(first: 10) {
          edges {
            node {
              id
              quantity
              cost {
                totalAmount {
                  amount
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  image {
                    url
                  }
                  title
                  price {
                    amount
                  }
                  product {
                    title
                  }
                }
              }
            }
          }
        }

        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
        }
        
        checkoutUrl
      }
    }
  `;

  const variables = {
    cartId,
  };
  try {
    const { data } = await storefront({ query: cartQuery, variables });
    return data.cart;
  } catch (error) {
    console.log(error)
  }
}

export async function updateItemQuantityCart({ cartId, itemId, quantity }: { cartId: string, itemId: string, quantity: string }) {
  const cartQuery = gql`
    mutation UpdateQuantity($cartId: ID!, $itemId: ID!, $quantity: Int) {
      cartLinesUpdate(
        cartId: $cartId
        lines: { id: $itemId, quantity: $quantity }
      ) {
        cart {
          id
        }
      }
    }
  `;

  const variables = {
    cartId,
    itemId,
    quantity
  };
  try {
    const { data } = await storefront({ query: cartQuery, variables});
    return data.cartLinesUpdate.cart;
  } catch (error) {
    console.log(error)
  }
}

export async function getTotalQuantityCart(cartId: string) {
  const getTotalQuantityCartQuery = gql`
    query cartTotalQuantityQuery($cartId: ID!) {
      cart(id: $cartId) {
        totalQuantity
      }
    }
  `;

  const variables = {
    cartId,
  };
  try {
    return await storefront({ query: getTotalQuantityCartQuery, variables });
  } catch (error) {
    console.log(error)
  }
}

export const getCheckoutUrl = async (cartId: string) => {
  const getCheckoutUrlQuery = gql`
    query checkoutURL($cartId: ID!) {
      cart(id: $cartId) {
        checkoutUrl
      }
    }
  `;
  const variables = {
    cartId: cartId,
  };
  try {
    return await storefront({ query: getCheckoutUrlQuery, variables });
  } catch (error) {
    console.log(error)
  }
};