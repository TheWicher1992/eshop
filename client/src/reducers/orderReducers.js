import { PLACE_ORDER_SUCCESS, PLACE_ORDER_FAIL, PLACE_ORDER_RESET } from '../actions/types/orderTypes'


export const placeOrderReducer = (state = { success: null, orderId: null }, action) => {
  switch (action.type) {
    case PLACE_ORDER_SUCCESS:
      return {
        success: true,
        orderId: action.payload
      }
    case PLACE_ORDER_FAIL:
      return {
        success: false,
        orderId: null
      }
    case PLACE_ORDER_RESET:
      return {
        success: null,
        orderId: null
      }
    default:
      return state
  }

}
