import React from 'react'
import Link from 'next/link';
import { collections } from '@/utils/data/navbar';
import { cn } from '@/lib/utils';

const Navbar = ({ selectedCategory }: { selectedCategory: string }) => {
  return (
    <div className="w-full px-2 py-4 bg-white border-b border-black/5 flex justify-center sticky -top-navbar">
      <ul className="flex gap-8 w-full max-w-[1400px]">
        {collections.map((item) => {
          return (
            <li className="" key={item.handle}>
              <Link
                href={`/collections/${item.handle}`}
                className={cn(
                  "text-xs text-black flex items-center gap-1 hover:font-semibold hover:underline",
                  selectedCategory === item.handle && "underline font-semibold"
                )}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar