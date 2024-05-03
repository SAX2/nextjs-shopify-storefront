import React from 'react'
import ProductGrid from '@/components/product-grid/ProductGrid';
// import { getProductsByCategory } from '@/lib/shopify/queries'; // shopify

import { collections } from '@/utils/data/products'; // provitional

const page = async ({ params: { category } }: { params: { category: string } }) => {
  // const { data } = await getProductsByCategory(category); // shopify

  const data = collections.filter((item) => item.handle === category); // provitional

  return (
    <main className="w-full p-8 flex justify-center max-md:p-4">
      <div className="max-w-[1400px] w-full">
        {data.length === 0 && <div>NO PRODUCTS FOUND</div>}
        {data.length > 0 && (
          <ProductGrid items={data[0].products.edges} category={category} />
        )}
      </div>
    </main>
  );
};

export default page