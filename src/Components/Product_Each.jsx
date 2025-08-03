import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { cart } from '../Reducer/reducer';

function Product_Each({element}) {
//  let rate = useSelector((state) => state.INR)

 let new_Rs = 85
let [isAdded, setAdded] = useState(false)

  let dispatch =useDispatch()

 let optimizedImage = (url) =>{
  return `https://res.cloudinary.com/dcb3u3vy8/image/fetch/${url}`}

function addToCart(e){
  setAdded(tru)
 dispatch(cart(e))

}

  return (
      <>
     <div className={`product-card justify-between product-content `}>
    <img src={optimizedImage(element.thumbnail)} alt={element.brand}  className="fade-image"  loading="lazy"/>
    <div>
      <div>
       <div className="product-title">{element.title}</div>
      <div className="product-description">
       {element.description}
      </div>

      <div className="product-price">₹{Math.floor(element.price * new_Rs).toLocaleString("en-IN")} <span className="product-discount">
        -{element.discountPercentage}%
        </span></div>

      <div className="product-meta">⭐ {element.rating} | Stock: {element.stock} | {element.brand}</div>
 
     <div className="gallery">
        <img src={ optimizedImage(element.images[0])}  alt="1" onClick={()=>changeimage(element.thumbnail)} 
        loading="lazy"/>
        <img src={ optimizedImage(element.images[1])} alt="2" onClick={()=>changeimage(element.images[1])} 
        loading="lazy"/>
        <img src={ optimizedImage(element.images[2])} alt="3" onClick={()=>changeimage(element.images[2])}  
        loading="lazy"/>
      </div>  

     
      {/* <button className="add-btn"  onClick={addingCart} >Add to Cart</button> */}

        {/* <button onClick={addingCart} style={{ background: isAdded ? "black" : "",color: isAdded ? "white" : ""}} 
        className="add-btn" id={element.category+element.id}>
        {isAdded ? "Item Added" : "Add to Cart"}
      </button> */}



         <div>
        <button  className="add-btn" onClick={()=>{addToCart(element)}} 
        style={{ background: isAdded ? "black" : "",color: isAdded ? "white" : ""}}>
            {isAdded ? "Item Added" : "Add to Cart"} 
  {/* {iid.includes(element.category + element.id) ? "Item Added" : "Add to Cart"} */}</button>

         <Link to="/cart" ><button className="view-cart-btn">View Cart</button></Link> 
        </div>
    </div>
    </div>
  </div> 
    
    
    
    </>
  )
}

export default Product_Each