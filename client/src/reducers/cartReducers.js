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
      return state
    default:
      return state
  }
}
