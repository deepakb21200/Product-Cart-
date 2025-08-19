
import "../cart.css"
import { useDispatch } from "react-redux"
 
 

function EachCart(props) {
let subtotal = props.qty * props.price;
 
  let dispatch = useDispatch()

   let optimizedImage = (url) =>{
  return `https://res.cloudinary.com/dcb3u3vy8/image/fetch/${url}`}


    let handleIncrease = () => {
    if (props.qty < 10) {
      dispatch({ type: "UPDATEQTY", payload: {
        id: props.id,
        qty: props.qty + 1
      } });
    } else {
     alert("You cannot add more than 10 items");
    }
  };

  let handleDecrease = () => {
    if (props.qty > 1) {
      dispatch({ type: "UPDATEQTY", payload: {
        id: props.id,
        qty: props.qty - 1
      } });
    } else {
      alert("You must have at least 1 item");
    }
  };


  return (
     <>
      <div className="cart-item">
        <img src={optimizedImage(props.thumbnail)} alt={props.title} />
        <div className="item-info">
          <div className="item-brand">Brand: {props.brand}</div>
          <div className="item-title">{props.title}</div>
          <div className="item-price">{props.price.toLocaleString("en-IN")}</div>
          <div className="item-subtotal">Subtotal: {subtotal.toLocaleString("en-IN")}</div>
          <div className="item-qty">
            <button className="qty-btn" onClick={handleDecrease}>
              -
            </button>

            <div className="qty-value">{props.qty}</div>

            <button className="qty-btn"  onClick={handleIncrease}>
              +
            </button>

            <button className="delete-btn" onClick={()=>{
                   dispatch({ type: "DELETEPRODUCT", payload: props.id });
              }}>
              Delete
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default EachCart