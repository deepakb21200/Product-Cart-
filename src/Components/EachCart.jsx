 import "../cart.css"
function EachCart() {
  return (
     <>
      <div className="cart-item">
        <img src={thumbnail} alt="iPhone 9" />
        <div className="item-info">
          <div className="item-brand">Brand: {brand}</div>
          <div className="item-title">{title}</div>
          <div className="item-price">{eachPrice}</div>
          <div className="item-subtotal">Subtotal: {price} </div>
          <div className="item-qty">
            <button className="qty-btn" onClick={() => substracting([unique, 1, eachPrice,false])}>
              -
            </button>

            <div className="qty-value">{quantity}</div>

            <button className="qty-btn" onClick={() => adding([unique, 1, eachPrice, true])}>
              +
            </button>

            <button className="delete-btn" onClick={() => deleting(index, price )}>
              Delete
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default EachCart