import {
  LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT,
  LOGIN_GOOGLE_FAIL, LOGIN_GOOGLE_REQUEST, LOGIN_GOOGLE_SUCCESS,
  LOGIN_FACEBOOK_FAIL, LOGIN_FACEBOOK_REQUEST, LOGIN_FACEBOOK_SUCCESS

} from '../actions/types/loginTypes'

const initialAuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false
}

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_GOOGLE_REQUEST:
    case LOGIN_FACEBOOK_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null }
    case LOGIN_GOOGLE_SUCCESS:
    case LOGIN_FACEBOOK_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', JSON.stringify(action.payload.token))
      localStorage.setItem('user', JSON.stringify(action.payload))
      return { ...state, isAuthenticated: true, user: action.payload, loading: false }
    case LOGIN_GOOGLE_FAIL:
    case LOGIN_FACEBOOK_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return {
        isAuthenticated: false,
        user: null,
        error: action.payload ? action.payload : null,
        loading: false
      }

    default:
      return state
  }
}
