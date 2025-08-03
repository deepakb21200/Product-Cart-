import React from 'react'
import { useSelector } from 'react-redux'
import EachCart from './EachCart'
import "../cart.css"
import { Link } from 'react-router-dom'
 

function Cart() {
  let cartDetails= useSelector((state) => state.cartDetails)

  return (
     <>
    <div> 
      
      <div className="cart-container">
      <div className="cart-title">Your Carts</div>



      {cartDetails.length ===0? (<h1>No Data Here.</h1>):
      cartDetails.map((ele, index)=>{
        return  <EachCart  {...ele} key ={index}/>
       })}


     <div className="total-box">Total: 0</div>
     
      <Link to="/"> <div className="go-home-box home-btn">
        ← Go to Home</div></Link>
        
        </div> 
      </div>   
 
   
   </>
  )
}

export default Cart