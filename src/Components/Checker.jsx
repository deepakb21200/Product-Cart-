import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSetProducts } from '../actions'
 
import '../checkbox.css'
import { Link } from 'react-router-dom'
// import { addSetProducts } from './actions'

 


 





export default function Checker() {


  
  let allCategoryData =  useSelector(state => state.allCategoryData)
      let allCombineData =  useSelector(state => state.allCombineData)
   let dispatch = useDispatch()

let arr =useRef([])



let  disp = useRef()



function filtered2(e,m){
  console.log(e,m);





  
}

function filtered(e,o){

if(o.target.checked && e <= 9){
    console.log(allCategoryData[e].products,"single");
      arr.current.push(...allCategoryData[e].products)
    //    console.log(arr.current,"arr.current")    
    dispatch(addSetProducts([...arr.current]))
    
}
 else if(o.target.checked == false){
 
let g = arr.current.filter(item => item.category !== o.target.value)

if(g.length ==0){
arr.current =[]
  return
}
  arr.current = g
dispatch(addSetProducts([...arr.current]))

}else{
   dispatch(addSetProducts(allCombineData))

}


 

}




  return (
     <>
         <div className="filter-container" style={{display:"flex", justifyContent:"center", marginTop:"25px"}}>

  <div className="go-home-box">
  <Link to="/cart">   <button className="home-btn filter-option">Cart</button></Link>

</div>

    <label className="filter-option"><input type="checkbox" value="smartphones" 
     onChange={(event)=>filtered(0,event)}/>
     smartphones
    </label>

    <label className="filter-option"><input type="checkbox" value="laptops"  
    onChange={(event)=>filtered(1,event)}  />

     laptops</label>

    <label className="filter-option"><input type="checkbox" value="furniture" 
      onChange={(event)=>filtered(2,event)}/>

     furniture</label>

    <label className="filter-option"><input type="checkbox" value="mens-shirts"  
    onChange={(event)=>filtered(3,event)} />

     mens-shirts

    </label>
    <label className="filter-option"><input type="checkbox" value="mens-shoes"  
     onChange={(event)=>filtered(4,event)}/>
     mens-shoes
    </label>

    <label className="filter-option"><input type="checkbox" value="womens-bags"  
     onChange={(event)=>filtered(5,event)}/> 
    womens-bags</label>

    <label className="filter-option"><input type="checkbox"  value="womens-shoes"  
    onChange={(event)=>filtered(6,event)} /> 
    womens-shoes</label>

    <label className="filter-option"><input type="checkbox" value="womens-watches" 
     onChange={(event)=>filtered(7,event)}  /> 
    womens-watches</label>

    <label className="filter-option"><input type="checkbox" value="mens-watches"  
    onChange={(event)=>filtered(8,event)}/> 
    mens-watches</label>

    <label className="filter-option"><input type="checkbox" value="sunglasses" 
     onChange={(event)=>filtered(9,event)} /> 

    sunglasses</label>


    <label className="filter-option"><input type="checkbox" value="smartphones"  
    onChange={(event)=>filtered(10,event)}/>
    All
    </label>




  </div>
     
     </>
  )
}
