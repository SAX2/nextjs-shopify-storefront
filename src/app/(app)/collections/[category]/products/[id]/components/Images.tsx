"use client"

import Image from 'next/image';
import React from 'react'

const Images = ({ images }: { images: any[] }) => {
  return (
    <div className="flex flex-col w-full gap-2 overflow-auto">
      {images.map((item) => {
        return (
          <Image
            key={item.node.id ?? ""}
            src={item.node.url ?? ""}
            alt={item.node.altText ?? ""}
            width={item.node.width}
            height={item.node.height ?? 0}
            className="w-full h-auto"
          />
        );
      })}
    </div>
  );
};

export default Images