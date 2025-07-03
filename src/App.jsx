import React from 'react'
import Checker from './Components/Checker'
import Products from './Components/Products'
import { Link, Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart'
 

export default function App() {
  return (
    

<>

     

      
    
 

<Routes>
<Route path="/" element={ <><Checker/><Products/></>}/> 
 

<Route path="/cart" element={<Cart />}/> 


</Routes>




</>





   
  )
}
