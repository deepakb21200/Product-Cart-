import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import "../header.css"
import { lists } from '../Lists/List'
import { useSelector } from 'react-redux'

 
 
function Header(props) {
   let totalvalue = useSelector(state => state.cartDetails)
let firsts = useSelector((state) => state.combinedData)
 let second = useSelector((state) => state.first)
 
let arr =useRef([])


function filtered(index,event){
if(event.target.checked && index <=9){
      arr.current.push(...second[index].products)

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
  props.data2(firsts)
}
}

  return (
       <>
     <div className="filter-container font-bold my-[15px]  grid grid-cols-2 gap-2 xl:flex
      xl:text-[15px] xl:justify-center md:grid-cols-3 lg:grid-cols-4 text-[12px] mx-[16px]   2xl:h-[50px] h-auto
      items-center">
      
           <Link to="/cart">   <button className="filter-option my-home-btn w-full">Cart ({totalvalue.length})</button>
           </Link>

              
             {lists.map((e, i) => (
              <label className="filter-option " key={i}>
                <input type="checkbox" value={e} onChange={(event) => filtered(i, event)} />
                {e}</label>
               ))}
        </div>


     
     </>
  )
}

export default Header


   
