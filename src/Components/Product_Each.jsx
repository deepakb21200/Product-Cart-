import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { cart, total } from '../Reducer/reducer';

function Product_Each({data}) {
//  let rate = useSelector((state) => state.INR)
let images = useRef()
 let new_Rs = 85
let [isAdded, setAdded] = useState(false)

  let dispatch =useDispatch()

 let optimizedImage = (url) =>{
  return `https://res.cloudinary.com/dcb3u3vy8/image/fetch/${url}`}



  function changeimage(e){

      if(data.thumbnail != e || data.thumbnail == e){
       images.current.classList.add("fade-out");
    setTimeout(() => {
      images.current.src = e;
      images.current.classList.remove("fade-out"); 
    }, 300); 
  
  }
  }

function addToCart(e){
  setAdded(true)
 dispatch(cart(e))
 dispatch(total([true,Math.floor(data.price * new_Rs)]))

}

  return (
      <>
     <div className={`product-card justify-between product-content `}>
    <img src={optimizedImage(data.thumbnail)} alt={data.brand}  className="fade-image"
      loading="lazy" ref={images}/> <div>

      <div>
        <div className="product-title">{data.title}</div>

      <div className="product-description">{data.description}</div>

      <div className="product-price">₹{Math.floor(data.price * new_Rs).toLocaleString("en-IN")}
        <span className="product-discount">-{data.discountPercentage}%</span>
        </div>

      <div className="product-meta">⭐ {data.rating} | Stock: {data.stock} | {data.brand}</div>
 
      <div className="gallery">
        <img src={ optimizedImage(data.images[0])}  alt={data.title} onClick={()=>changeimage(data.thumbnail)} 
        loading="lazy"/>
        <img src={ optimizedImage(data.images[1])} alt="2" onClick={()=>changeimage(data.images[1])} 
        loading="lazy"/>
        <img src={ optimizedImage(data.images[2])} alt="3" onClick={()=>changeimage(data.images[2])}  
        loading="lazy"/>
      </div>  

         <div>
        <button  className="add-btn" onClick={()=>{addToCart(data)}} 
        style={{ background: isAdded ? "black" : "",color: isAdded ? "white" : ""}}>
            {isAdded ? "Item Added" : "Add to Cart"} 
       </button>

         <Link to="/cart" ><button className="view-cart-btn">View Cart</button></Link> 
        </div>
    </div>
    </div>
  </div> 
    
    
    
    </>
  )
}

export default Product_Each