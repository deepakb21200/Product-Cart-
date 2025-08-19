
export function calculateGrandTotal(cart) {
  return cart.reduce((acc, item) => acc + item.subtotal, 0);
 
}