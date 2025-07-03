
import { Link } from 'react-router-dom'
import '../Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { allcart_delete, Allid } from '../actions'
import Eachproductitem from './Eachproductitem'






export default function Cart() {

let dispatch = useDispatch()
 let all_cart_data = useSelector((state) => state.all_cart_data)
console.log(all_cart_data,"allcartdata",all_cart_data.length);

  let iid =  useSelector(state => state.iid)
let  grandTotal = useSelector((state) => state.grandTotal)
function deleting(r){
    let k = [...all_cart_data]
    k.splice(r[0],1)
dispatch(allcart_delete(k))
let m = [...iid]

m.push(k[1])
dispatch(Allid(m))






 }




  return (
     <>

  <div className="cart-container">
      <div className="cart-title">Your Carts</div>



{/* {all_cart_data.length <0? (<h1>No Data Here.</h1>):

 ""

} */}


{/* 
  case delete_todo:{
            let newTodo = [...state.todos]
            newTodo.splice(action.payload,1)
            return {
                ...state,
                todos: newTodo
            }
        } */}



{all_cart_data.length ===0? (<h1>No Data Here.</h1>):

all_cart_data.map((ele)=>{
return ele

}).map((elea,ins)=>{
    return <Eachproductitem key={ins} thumbnail ={elea[3]} brand={elea[1] }title={elea[4]} price={elea[2]}
     unique={elea[0]} index={ins}/>
})}








      {/* <div className="cart-item">
       

        <img src="https://images.unsplash.com/photo-1750365866655-e712abd3ad46?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="iPhone 9" />
        <div className="item-info">
          <div className="item-brand">Brand: Apple</div>
          <div className="item-title">iPhone 9</div>
          <div className="item-price">$549</div>
          <div className="item-subtotal">Subtotal: $549</div>
          <div className="item-qty">
            <button className="qty-btn">-</button>
            <div className="qty-value">1</div>
            <button className="qty-btn">+</button>
            <button class="delete-btn">Delete</button>
          </div>
        </div>
      </div> */}

      {/* <div className="cart-item">
    

        <img src="https://images.unsplash.com/photo-1750779940886-edfa73b5c5c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Samsung Universe 9" />
        <div className="item-info">
          <div className="item-brand">Brand: Apple</div>
          <div className="item-title">Samsung Universe 9</div>
          <div className="item-price">$1249</div>
          <div className="item-subtotal">Subtotal: $2498</div>
          <div className="item-qty">
            <button className="qty-btn">-</button>
            <div className="qty-value">2</div>
            <button className="qty-btn">+</button>
            <button class="delete-btn">Delete</button>
          </div>
        </div>
      </div> */}

      <div className="total-box">Total: {grandTotal}</div>


      <Link to="/"> <div className="go-home-box home-btn">
← Go to Home
</div></Link>



 

     

    </div>

      
     </>
  )
}




// let a = [[1,2,3,4],[10,20,330,40]]


// console.log(a.length);









// {/* <div className="cart-item" key={ins}>
       
// {/* element.id,element.brand,element.price,element.thumbnail,element.title */}
//         <img src={elea[3]} alt="iPhone 9" />
//         <div className="item-info">
//           <div className="item-brand">Brand: {elea[1]}</div>
//           <div className="item-title">{elea[4]}</div>
//           <div className="item-price">{elea[2]}</div>
//           <div className="item-subtotal">Subtotal: {elea[2]}</div>
//           <div className="item-qty">
//             <Eachitem />
//             {/* <button className="qty-btn" onClick={()=>setCount(count-1)}>-</button> */}
//             {/* <div className="qty-value">{count}</div> */}
//             {/* <button className="qty-btn" onClick={()=>setCount(count+1)}>+</button> */}
//             <button className="delete-btn" onClick={()=>deleting([ins,elea[0]])}>Delete</button>
//           </div>
//         </div>
//       </div> */}
