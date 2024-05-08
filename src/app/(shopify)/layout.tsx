import React from 'react'
import Navbar from '../(example)/components/navbar/Navbar'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default layout