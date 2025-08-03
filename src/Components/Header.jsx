import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "../header.css"
import { lists } from '../Lists/List'
import { useSelector } from 'react-redux'

 
 
function Header(props) {


// let first = useSelector((state) => state.allCombineData)

 let second = useSelector((state) => state.first)


let arr =useRef([])
function filtered(index,event){
if(event.target.checked && index <=9){

      arr.current.push(...second[index].products)
      console.log(arr.current,"arr.current");
    props.data2([...arr.current])


}
else if(event.target.checked == false){

let g = arr.current.filter(item => item.category !== event.target.value)

if(g.length ==0){
arr.current =[]
return
}

arr.current = g
props.data2([...g])
}
else{

}
}



  return (
       <>
         <div className="filter-container font-bold" style={{display:"flex", justifyContent:"center", marginTop:"25px"}} >
            <div className="go-home-box">
                <Link to="/cart">   <button className="home-btn filter-option">Cart</button></Link>
                </div>
                {lists.map((e,i)=>{
                    return <label className="filter-option" key={i}>
                          <input type="checkbox"
                     value={e} onChange={(event)=>filtered(i,event)} key ={i}  />      
                     {e}</label>
                     })}
            </div>
     
     </>
  )
}

export default Header