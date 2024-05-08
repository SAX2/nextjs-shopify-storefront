import ProductGrid from "@/components/product-grid/ProductGrid";
import { products } from "@/utils/data/products";

export default async function Home() {
  return (
    <main className="w-full p-8 flex justify-center max-md:p-4">
      <div className="max-w-[1400px] w-full">
        <ProductGrid
          items={products}
          title={"STÜSSY & LEVI'S"}
          category="new-arrivals"
          route="example"
        />
      </div>
    </main>
  );
}
