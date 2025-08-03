 import { useEffect, useState } from "react";
import "../cart.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteSpecific, total } from "../Reducer/reducer";

function EachCart(props, index) {
  let [count, setCount] = useState(1) // user 10 quantity tak select kar sakta hia
  let [max10, setMax10] = useState(1)
   let [new_Rs]=  useState(85)

   
  let [price, setPrice] = useState(Math.floor(props.price * new_Rs))

  let dispatch = useDispatch()

  return (
     <>
      <div className="cart-item">
        <img src={props.thumbnail} alt={props.title} />
        <div className="item-info">
          <div className="item-brand">Brand: {props.brand}</div>
          <div className="item-title">{props.title}</div>
          <div className="item-price">{Math.floor(props.price * new_Rs).toLocaleString("en-IN")}</div>
          <div className="item-subtotal">Subtotal: {price.toLocaleString("en-IN")} </div>
          <div className="item-qty">
            <button className="qty-btn" onClick={()=>{
                if(max10==1){
                alert("min")
                }
            else{
                setCount((count)=>count-1)
               setMax10(max10-1)
                setPrice(prev => prev - Math.floor(props.price * new_Rs))
                console.log(price);
                
                dispatch(total([false,Math.floor(props.price * new_Rs)]))
                } }}>
              -
            </button>

            <div className="qty-value">{count}</div>

            <button className="qty-btn"  onClick={()=>{
               if(max10<10){
               setCount((count)=>count+1)
               setMax10(max10+1)
               setPrice(prev => prev + Math.floor(props.price * new_Rs))
               console.log(price,"eachcart");
               
               dispatch(total([true,Math.floor(props.price * new_Rs)]))
                }
        
            else{ alert("max up to 10")}
               }}>
              +
            </button>

            <button className="delete-btn" onClick={()=>{
              // dispatch(deleteSpecific(props.index))
                    dispatch(deleteSpecific([props.index,price]))
              // dispatch(total([false,price]))
              }}>
              Delete
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default EachCart