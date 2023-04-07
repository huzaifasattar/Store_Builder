import React from 'react'
import { Route, Routes} from 'react-router-dom'
import SignIn from '../login/loginCom'
import ResponsiveAppBar from '../navbar/navbar-com'
import GridCard from '../productDis/productDis'
import SignUp from '../signUp/signUpCom'
import ComplexGrid from '../variantProduct/seeProduct'
import Cart from '../cart/fullCart'
import AddProduct from '../addProduct/addProduct'

const RouterCom = () => {
  return (
      <>
      <Routes>
        <Route path='/' element={ <><SignIn/></>} />
              <Route  exact path='/home' element={<><ResponsiveAppBar /><GridCard /></>} />
              <Route exact path='/signup' element={ <><SignUp/></>} />
        <Route exact path='/variant/:id' element={<><ResponsiveAppBar /><ComplexGrid /></>} />
        <Route exact path='/cart' element={<><ResponsiveAppBar /><Cart /></>} />
        <Route exact path='/product' element={ <><ResponsiveAppBar /><AddProduct/></>} />
      </Routes>
      
      </>
  )
}

export default RouterCom
