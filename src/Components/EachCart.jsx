 import "../cart.css"
function EachCart(props) {
  console.log(props);
  
  return (
     <>
      <div className="cart-item">
        <img src={props.thumbnail} alt="iPhone 9" />
        <div className="item-info">
          <div className="item-brand">Brand: {props.brand}</div>
          <div className="item-title">{props.title}</div>
          <div className="item-price">{props.eachPrice}</div>
          <div className="item-subtotal">Subtotal: {props.price} </div>
          <div className="item-qty">
            <button className="qty-btn" >
              -
            </button>

            <div className="qty-value"></div>

            <button className="qty-btn" >
              +
            </button>

            <button className="delete-btn">
              Delete
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default EachCart