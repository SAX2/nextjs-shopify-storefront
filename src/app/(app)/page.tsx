import ProductGrid from "@/components/product-grid/ProductGrid";
// import { getProducts } from "@/lib/shopify/queries"; // shopify

import { products } from "@/utils/data/products"; // provitional

export default async function Home() {
  // const { data } = await getProducts({}); // shopify

  return (
    <main className="w-full p-8 flex justify-center max-md:p-4">
      <div className="max-w-[1400px] w-full">
        <ProductGrid items={products} title={"STÜSSY & LEVI'S"} category="new-arrivals" />
      </div>
    </main>
  );
}
