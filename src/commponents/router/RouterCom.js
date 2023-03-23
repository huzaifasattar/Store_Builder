import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ResponsiveAppBar from '../navbar/navbar-com'
import GridCard from '../productDis/productDis'
import ComplexGrid from '../variantProduct/seeProduct'

const RouterCom = () => {
  return (
      <>
          <Routes>
              <Route path='/' element={<><ResponsiveAppBar /><GridCard /></>} />
              
              <Route path='/' element={<><ResponsiveAppBar/><ComplexGrid/></> } />
      </Routes>
      
      </>
  )
}

export default RouterCom
