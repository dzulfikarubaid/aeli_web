import React from 'react'
import Table from './Table'
import Content from '../Content'
import NoNavbar from '../NoNavbar'
import Navbar from './SpecialNavbar'

const Dpd = () => {
  return (
    <div>
    <Navbar><h1 className='font-bold text-xl text-left p-4'>Daftar DPD AELI di Indonesia</h1>
    
    </Navbar>
    <div className='p-10 pt-20'>
      <Table></Table>
    </div>
  
    </div>
    

  )
}

export default Dpd