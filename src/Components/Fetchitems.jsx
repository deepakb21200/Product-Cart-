import React, {  useRef, useState } from 'react'

import { allcart, Allid, storingTotal } from '../actions'
import { useDispatch, useSelector } from 'react-redux';
// import Cart from './Cart';
 
export default function Fetchitems({element}) {
// let all_cart_data = useSelector((state) => state.all_cart_data)
let indiaR =useSelector((state) => state.indiaR)
console.log(indiaR);

let dispatch =useDispatch()
let actual = useRef()

let moving = useRef([])

const [isAdded, setIsAdded] = useState(false);

  let iid =  useSelector(state => state.iid)
// let indiaR =useSelector((state) => state.indiaR)




function addingCart(e){

  if(actual.current.style.background == "black"){
    alert("This item has already been selected! ")
    return
  }

  // dispatch(storingTotal(Number(Math.round(element.price* indiaR)))

//    console.log(moving.current,"before");
//  moving.current.push([element.id,element.brand,element.price,element.thumbnail,element.title])
//  console.log("moving.curent",moving.current);
 
// console.log(element.brand,element.price,element.thumbnail)
 

// dispatch(allcart([moving.current]))
dispatch(allcart([element.id,element.brand,element.price,element.thumbnail,element.title,element.category]))
dispatch(storingTotal(Number(Math.round(element.price * indiaR))))

{/* <Cart elementbrand ={element.brand} elementprice ={element.price} elementthumbnail={element.thumbnail}
elementid= {element.id}/> */}


  let r = [...iid]
console.log("before value of re",r);

let index = r.findIndex(item => item === element.id)

console.log(index);

r.splice(index,1)
console.log("after value of re",r);
dispatch(Allid([...r]))
setIsAdded(true)

}



  let images = useRef()

  let changeimage = (e)=>{

    if(element.thumbnail != e || element.thumbnail == e){
       images.current.classList.add("fade-out");
    setTimeout(() => {
      images.current.src = e;
      images.current.classList.remove("fade-out"); 
    }, 300); 
    
    }   
  }
  

// let each_data = useRef([])
// useEffect(()=>{
  
//   each_data.current.push([element.brand,element.price,element.thumbnail])
 
  
// },[])




  return (

    
    <>
     <div className={`product-card`}>
    <img src={element.thumbnail} alt={element.brand} ref={images} className="fade-image"/>
    <div className="product-content">
      <div className="product-title">{element.title}</div>
      <div className="product-description">
       {element.description}
      </div>

      <div className="product-price">₹{Math.round(element.price * indiaR).toLocaleString("en-IN")} <span className="product-discount">-{element.discountPercentage}%
        </span></div>

      <div className="product-meta">⭐ {element.rating} | Stock: {element.stock} | {element.brand}</div>
 
     <div className="gallery">
        <img src={element.images[0]} alt="1" onClick={()=>changeimage(element.thumbnail)} />
        <img src={element.images[1]} alt="2" onClick={()=>changeimage(element.images[1])} />
        <img src={element.images[2]} alt="3" onClick={()=>changeimage(element.images[2])} />
      </div>  

      {/* <button className="add-btn"  onClick={addingCart} >Add to Cart</button> */}

        {/* <button onClick={addingCart} style={{ background: isAdded ? "black" : "",color: isAdded ? "white" : ""}} 
        className="add-btn" id={element.category+element.id}>
        {isAdded ? "Item Added" : "Add to Cart"}
      </button> */}



      <button onClick={addingCart} style={{  background: iid.includes(element.id)
       ? "red" : "black",  color: iid.includes(element.id) ? "white" : "" }} className="add-btn"
   ref={actual}>
   {isAdded ? "Item Added" : "Add to Cart"}
  {/* {iid.includes(element.category + element.id) ? "Item Added" : "Add to Cart"} */}

</button>

      <button className="view-cart-btn">View Cart</button>
    </div>
  </div> 
    
    
    
    </>
  )
}
// id={element.category + element.id}