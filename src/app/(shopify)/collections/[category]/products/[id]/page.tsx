import React from 'react'


import Images from './components/Images';
import useFormatPrice from '@/lib/hooks/useFormatPrice';
import Variants from './components/Variants';
import Button from './components/Buttons';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
// import { getSingleProduct, getProductByVariant } from '@/lib/shopify/queries'; // shopify

import { products } from '@/utils/data/products'; // provitional

const page = async ({
  params: { id },
  searchParams: { variant },
}: {
  params: { id: string };
  searchParams: { variant: string };
}) => {
  // const { data } = variant ? (await getProductByVariant(variant)) :  (await getSingleProduct(id)) // shopify

  const data = products.filter(
    (item) => item.node.id.toLowerCase() === id.split("-")[0]
  )[0]; // provitional

  return (
    <main className="w-full flex justify-center max-md:p-4">
      <div className="max-w-[1400px] w-full flex gap-5">
        <section className="w-2/4">
          <Images images={data.node.images?.edges ?? []} />
        </section>
        <section className="h-full-header h-full pt-20 pl-32 sticky top-[115px] w-2/4">
          <div className="relative flex flex-col gap-4 h-full">
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">{data.node.title}</h1>
              <p className="text-xs">
                {useFormatPrice(
                  data.node.priceRangeV2?.minVariantPrice?.amount ?? 0
                )}
              </p>
            </div>
            {data.node.variants?.edges && (
              <Variants variants={data.node.variants?.edges ?? []} />
            )}
            <ProductMoreData description={data.node.description ?? ""} />
            <div className="absolute bottom-0 pb-4 w-full flex gap-3">
              {data.node.totalInventory === 0 && <Button type="sold-out" />}
              {data.node.totalInventory && data.node.totalInventory > 0 && (
                <>
                  <Button type="bag" />
                  <Button type="checkout" />
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

const ProductMoreData = ({ description }: { description: string }) => {
  return (
    <Accordion type="multiple">
      <AccordionItem value="description" className='!border-black/5'>
        <AccordionTrigger className="text-xs">DETAILS</AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="size-guide" className='!border-black/5'>
        <AccordionTrigger className="text-xs">SIZE GUIDE</AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
      <AccordionItem value="shhipping-returns" className='!border-black/5'>
        <AccordionTrigger className="text-xs">SHIPPING & RETURNS</AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default page