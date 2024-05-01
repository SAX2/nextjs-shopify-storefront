import { collections } from '@/utils/data/navbar';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

const Navbar = ({ selectedCategory }: { selectedCategory: string }) => {
  return (
    <div className="w-full px-2 py-4 bg-white border-b border-black/5 flex justify-center sticky -top-navbar">
      <ul className="flex gap-8 w-full max-w-[1400px]">
        <li>
          <Link
            href={`/collections/${selectedCategory}`}
            className="text-xs text-black/60 flex items-center gap-1"
          >
            <ChevronLeft width={14} height={14} />
            BACK TO{" "}
            {
              collections.filter(
                (collection) => collection.handle === selectedCategory
              )[0].title
            }
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar