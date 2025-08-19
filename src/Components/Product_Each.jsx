import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function Product_Each({data}) {
//  let rate = useSelector((state) => state.INR)

 let combinedData = useSelector((state) => state.combinedData)
 


  // let savedState = localStorage.getItem("allproductIDS") ? 
  //   JSON.parse(localStorage.setItem("allproductIDS"))
  //   : []


  const [isAdded, setAdded] = useState(
    combinedData.find(e => e.id === data.id)?.isclicked || false
  )



useEffect(()=>{
    const found = combinedData.find(e => e.id === data.id);
    setAdded(found?.isclicked || false);
},[data])

   
    let images = useRef()
     let new_Rs = 85
 
  let dispatch =useDispatch()

 let optimizedImage = (url) =>{
  return `https://res.cloudinary.com/dcb3u3vy8/image/fetch/${url}`}

  
  function changeimage(newSrc) {

  if (images.current.src.includes(newSrc)){
    return
  }

  images.current.classList.add("fade-out")
  setTimeout(() => {
    images.current.src = newSrc;
    images.current.classList.remove("fade-out");
  }, 300)
}


function addToCart(product){
  if(!isAdded){
    setAdded(true);
  dispatch({ type: "ADDTOCART", payload: product })
  }else{
    alert("You have already added this item")
  }

}

  return (
      <>
     <div className={`product-card justify-between pt-0 pr-4 pb-4 pl-4 
       mx-[15px] 2xl:mx-[10px] `} style={{boxShadow: '0px 4px 12px rgba(0,,0,0.5)'}}>
    <img src={optimizedImage(data.thumbnail)} alt={data.brand}  className="fade-image"
      ref={images}/> <div>

      <div>
        <div className="product-title">{data.title}</div>

      <div className="product-description">{data.description}</div>

      <div className="product-price">₹{data.price.toLocaleString("en-IN")}
        <span className="product-discount">-{data.discountPercentage}%</span>
        </div>

      <div className="product-meta">⭐ {data.rating} | Stock: {data.stock} | {data.brand}</div>
 
      <div className="gallery">
        <img src={ optimizedImage(data.images[0])}  alt={data.title} onClick={()=>changeimage(data.thumbnail)}/>
        <img src={ optimizedImage(data.images[1])} alt="2" onClick={()=>changeimage(data.images[1])}/>
        <img src={ optimizedImage(data.images[2])} alt="3" onClick={()=>changeimage(data.images[2])}/>
      </div>  

         <div>
        <button  className="add-btn" onClick={()=>{addToCart(data)}} 
        style={{ background: isAdded ? "black" : "", color: isAdded ? "white" : ""}}>
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