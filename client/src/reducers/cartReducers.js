import types from "../actions/types/cartTypes";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case types.CART_ADD_ITEM:
      const existentItem = state.cartItems.find(i => i.id === action.payload.id)
      if (existentItem)
        return {
          cartItems: state.cartItems.map(i => {
            if (i.id === existentItem.id) return action.payload
            else return i
          })
        }
      else return { cartItems: [...state.cartItems, action.payload] }
    case types.CART_REMOVE_ITEM:
      const itemId = action.payload
      return {
        cartItems: state.cartItems.filter(item => item.id !== itemId)
      }
    default:
      return state
  }
}

export const shippingAddressReducer = (state = { address: null, city: null, postal: null }, action) => {
  switch (action.type) {
    case types.SAVE_SHIPPING:
      return {
        address: action.payload.address,
        city: action.payload.city,
        postal: action.payload.postal
      }
    default:
      return state
  }
}

export const paymentTypeReducer = (state = { paymentType: null }, action) => {
  switch (action.type) {
    case types.SAVE_PAYMENT:
      return {
        paymentType: action.payload
      }
    default:
      return state
  }
}
