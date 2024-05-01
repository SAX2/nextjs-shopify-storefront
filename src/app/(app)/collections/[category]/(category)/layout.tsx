import React from 'react'
import { collections } from '@/utils/data/navbar'
import Link from 'next/link';
import Navbar from './components/Navbar';

const layout = ({ children, params: { category } }: { children: React.ReactNode, params: { category: string } }) => {
  return (
    <div>
      <Navbar selectedCategory={category} />
      {children}
    </div>
  );
}

export default layout