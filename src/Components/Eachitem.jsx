import React, { useState } from 'react'
import '../Cart.css'
export default function Eachitem() {
  let [count, setCount] = useState(0)
  return (
     <>
     
    <button className="qty-btn" onClick={()=>setCount(count-1)}>-</button>
            <div className="qty-value">{count}</div>
            <button className="qty-btn" onClick={()=>setCount(count+1)}>+</button>
        
     
     
     </>
  )
}
