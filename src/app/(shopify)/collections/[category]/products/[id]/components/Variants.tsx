"use client"

import React, { useCallback } from 'react'
import { Variant } from '@/utils/data/products/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const Variants = ({ variants }: { variants: { node: Variant }[] }) => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  return (
    <>
      <Separator orientation="horizontal" className="bg-black/5" />
      <div className="flex gap-5">
        {variants.map((item) => {
          return (
            <button
              className={cn(
                "text-xs hover:font-medium",
                searchParams.get("variant") === item.node.id &&
                  "font-medium underline"
              )}
              onClick={() =>
                router.push(
                  pathname +
                    "?" +
                    createQueryString("variant", item.node.id ?? "")
                )
              }
              key={item.node.id}
            >
              {item.node.title}
            </button>
          );
        })}
      </div>
      <Separator orientation="horizontal" className="bg-black/5" />
    </>
  );
};

export default Variants