import React from 'react'
import NavbarWhite from './components/Navbar'

function NoNavbar(props:any) {
    const {children, className} = props

  return (
    <>
    <NavbarWhite></NavbarWhite>
    <div className={`p-10 mt-20 ${className}`}>{children}</div>
    </>
    
  )
}

export default NoNavbar