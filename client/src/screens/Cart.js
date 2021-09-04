import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)


  return (
    <div>
      {
        cartItems.map(item => <h4>{item.name} quantity: {item.qty}</h4>)
      }
    </div>
  )
}

export default Cart
