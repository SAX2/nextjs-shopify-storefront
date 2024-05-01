import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";
import ProductQuantity from "./ProductQuantity";
import useFormatPrice from "@/lib/hooks/useFormatPrice";
import { CartLine } from "@/utils/data/navbar/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

// import { retrieveCart } from "@/lib/shopify/queries"; // shopify

import { cart } from "@/utils/data/navbar"; // provitional

const Bag = async ({ cartId }: { cartId: string }) => {
  // const { data: { cart } } = await retrieveCart(cartId) // shopify

  return (
    <Sheet>
      <SheetTrigger className="text-xs font-medium text-black flex items-center gap-1">
        BAG
      </SheetTrigger>
      <SheetContent className="!max-w-[550px] w-full p-0">
        <div className="relative h-full w-full">
          <SheetHeader className="p-4">
            <SheetTitle>SHOPPING BAG</SheetTitle>
          </SheetHeader>
          <Separator className="bg-black/5" />
          <ScrollArea className="p-4 py-6 max-h-[65%] h-fit">
            <div className="flex flex-col gap-6">
              {cart.lines?.edges.map((item) => {
                if (!item.node) return;

                return (
                  <BagItem
                    product={item.node}
                    cartId={cart.id ?? ""}
                    key={item.node.id}
                  />
                );
              })}
            </div>
          </ScrollArea>
          <Separator className="bg-black/5" />
          <div className="flex flex-col gap-3 w-full p-8">
            <div className="flex w-full justify-between">
              <p className="text-sm font-medium">SUBTOTAL</p>
              <p className="text-sm font-medium">
                {useFormatPrice(
                  cart.cost?.subtotalAmount?.amount ?? 0,
                  cart.cost?.subtotalAmount?.currencyCode
                )}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 p-4 border-t border-black/5 w-full flex gap-4">
            <SheetClose className="w-full border border-black font-semibold p-4">
              CONTINUE SHOPPING
            </SheetClose>
            <a
              href={cart.checkoutUrl}
              className="w-full text-white bg-black font-semibold p-4 text-center cursor-pointer"
            >
              CHECKOUT
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

const BagItem = ({ product, cartId }: { product: CartLine, cartId: string }) => {
  return (
    <div className="flex gap-3 w-full">
      <Image
        src={product.merchandise?.image?.url ?? ""}
        alt={product.merchandise?.image?.altText ?? ""}
        width={product.merchandise?.image?.width}
        height={product.merchandise?.image?.height ?? 1024}
        className="max-w-[150px] select-none"
      />
      <div className="flex flex-col gap-2 justify-between">
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold truncate">
            {product.merchandise?.product?.title}
          </h4>
          <p className="text-sm">
            {product.merchandise?.title}<span className="px-1">/</span>
            {product.merchandise?.selectedOptions?.values}
          </p>
          <Separator className="border-black/5 my-2"/>
          <p className="text-xs text-black/75">
            {useFormatPrice(
              product.cost?.totalAmount.amount ?? 0,
              product.cost?.totalAmount.currencyCode
            )}
          </p>
        </div>
        <div>
          <ProductQuantity
            itemId={product.id ?? ""}
            cartId={cartId}
            quantity={product.quantity ?? 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Bag;