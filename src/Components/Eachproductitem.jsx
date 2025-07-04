import React, { useState } from "react";
import "../Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { allcart_delete, Allid, storingTotal, sub_storingTotal } from "../actions";
// import { sub_all_total } from "../constants";
 export default function Eachproductitem({
  thumbnail,
  brand,
  title,
  price,
  unique,
  index,
  cat
}) {
  let dispatch = useDispatch()


// console.log(typeof price, "type of price");


// console.log("first time render due to cart component");

  

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
  console.log(all_cart_data, "allcartdata", all_cart_data.length,"second");

  let iid = useSelector((state) => state.iid);


  function deleting(r) {
    let k = [...all_cart_data];
    console.log("value of r before deltet",r);
    let dk =r[0]
    k.splice(dk, 1);
    dispatch(allcart_delete(k));
    let m = [...iid];
console.log(r,"value of r");

    m.push(k[1]);
    dispatch(Allid(m));
 dispatch(sub_storingTotal(r[2]))
//  console.log(r[2],typeof r[2],"r[2");
// console.log(r[],"value of subtotals");

 
  }




  function adding(r){   //convertedPrice2,count[0]
    if(counter<10){

        setCount([count[0] + r[0]])
        setCounter(counter+1)
        dispatch(storingTotal(r[0]))
    // console.log({id: index, total_price: convertedPrice2, category: cat});
    console.log("convertedprice2 from adding ", convertedPrice2);
    
    }
        
        else{
            alert("max up to 10")
        }
  }




  function substracting(r){ 
    if(counter==1){

alert("min")}

else{


  console.log(r);
  
 setCount([count[0] - r[0]])
 setCounter(counter-1)

 dispatch(sub_storingTotal(r[0]))


   console.log("convertedprice2 from subtracting ", r[0],"and",r[1]);



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
            <button className="qty-btn" onClick={()=>substracting([convertedPrice2,count[0]])}>-</button>

            <div className="qty-value">{counter}</div>

            <button className="qty-btn"  onClick={()=>adding([convertedPrice2,count[0]])}>+</button>

            <button className="delete-btn" onClick={() => deleting([index, unique,count[0]])}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}





 


