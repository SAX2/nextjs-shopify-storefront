"use client"

import React from 'react'
import useFormatPrice from '@/lib/hooks/useFormatPrice';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Product } from '@/utils/data/products/types';
import { useParams } from 'next/navigation';

const ProductGrid = ({
  items,
  className,
  title,
  category
}: {
  title?: string;
  className?: string;
  items: { node: Product }[];
  category?: string,
}) => {
  const params = useParams();

  const getPath = (id: string, handle: string) => {
    const categoryParam = params.category;

    return `/collections/${category ?? categoryParam}/products/${id.toLowerCase()}-${handle}`;
  }

  return (
    <section className="flex flex-col gap-4">
      {title && <div className='w-full flex'><h2 className='font-bold tracking-tight'>{title}</h2></div>}
      <div className={cn("grid grid-cols-4 gap-4 w-full max-lg:grid-cols-3 max-md:grid-cols-2", className)}>
        {items.map((item) => {
          const path = getPath(item.node.id, item.node.handle ?? "");

          return (
            <Link href={path} className="flex flex-col gap-2 justify-center h-fit" key={item.node.id}>
              <div className="w-full h-auto flex">
                <Image
                  className=""
                  src={item.node.images?.edges[0].node.url ?? ""}
                  alt={item.node.images?.edges[0].node.altText ?? ""}
                  width={item.node.images?.edges[0].node.width}
                  height={1024}
                />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <h3 className='text-xs font-medium truncate'>{item.node.title}</h3>
                <h3 className='text-xs truncate text-black/75'>{useFormatPrice(item.node.priceRangeV2?.minVariantPrice?.amount ?? 0)}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGrid