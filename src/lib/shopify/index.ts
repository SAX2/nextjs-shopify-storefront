type JsonValue<T = any> =
  | null
  | string
  | number
  | boolean
  | JsonValue<T>[]
  | { [key: string]: JsonValue<T> };

export default async function storefront({ query, variables = {} }: { query: string, variables?: JsonValue }) {
  const response = await fetch(process.env.SHOPIFY_PULIC_API_URL ?? "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN ?? "",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 20 },
  });

  const data = await response.json();

  return data;
}