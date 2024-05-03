import React from 'react'
import Navbar from './components/Navbar';

const layout = ({
  children,
  params: { category, id: ProductId },
}: {
  children: React.ReactNode;
  params: { id: string; category: string };
  searchParams: { variant: string };
}) => {
  return (
    <div>
      <Navbar selectedCategory={category} />
      {children}
    </div>
  );
};

export default layout