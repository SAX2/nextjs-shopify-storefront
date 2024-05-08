import React from 'react'
import Navbar from '../components/navbar/Navbar'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar route="example" />
      {children}
    </div>
  )
}

export default layout