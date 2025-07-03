import React, { useState } from "react";
import "../Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { allcart_delete, Allid, storingTotal } from "../actions";
export default function Eachproductitem({
  thumbnail,
  brand,
  title,
  price,
  unique,
  index,
}) {
  let dispatch = useDispatch()


// console.log(typeof price, "type of price");



  

let indiaR =useSelector((state) => state.indiaR)


   let [convertedPrice, setconvertedPrice] = useState(
    Math.round(price * indiaR).toLocaleString("en-IN")
  );

    let [convertedPrice2, setconvertedPrice2] = useState(Number(Math.round(price * indiaR)))


let [counter, setCounter] = useState(1)
// let [add, setAdd] = useState([])

// let [sub, setSub] = useState(add)


// dispatch(storingTotal(convertedPrice2))


  let [count, setCount] = useState([convertedPrice2]);

 
  let all_cart_data = useSelector((state) => state.all_cart_data);
  console.log(all_cart_data, "allcartdata", all_cart_data.length);

  let iid = useSelector((state) => state.iid);


  function deleting(r) {
    let k = [...all_cart_data];
    k.splice(r[0], 1);
    dispatch(allcart_delete(k));
    let m = [...iid];

    m.push(k[1]);
    dispatch(Allid(m));
  }




  function adding(r){
    if(counter<=9){
        setCount([count[0] + r])
        setCounter(counter+1)
        dispatch(storingTotal(r))
    
    }
        
        else{
            alert("max up to 10")
        }
  }




  function substracting(r){
    if(counter==1){

alert("min")}

else{
 setCount([count[0] - r])
 setCounter(counter-1)
 dispatch(storingTotal(r))

}



  }

  return (
    <>
      <div className="cart-item">
        <img src={thumbnail} alt="iPhone 9" />
        <div className="item-info">
          <div className="item-brand">Brand: {brand}</div>
          <div className="item-title">{title}</div>
          <div className="item-price">{convertedPrice2}</div>
          <div className="item-subtotal">Subtotal: {count[0]} </div>
          <div className="item-qty">
            <button className="qty-btn" onClick={()=>substracting(convertedPrice2)}>-</button>

            <div className="qty-value">{counter}</div>

            <button className="qty-btn"  onClick={()=>adding(convertedPrice2)}>+</button>

            <button className="delete-btn" onClick={() => deleting([index, unique])}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}









