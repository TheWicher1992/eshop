import {
  LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT,
  LOGIN_GOOGLE_FAIL, LOGIN_GOOGLE_REQUEST, LOGIN_GOOGLE_SUCCESS,
  LOGIN_FACEBOOK_FAIL, LOGIN_FACEBOOK_REQUEST, LOGIN_FACEBOOK_SUCCESS,
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL,
  GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL,

} from '../actions/types/loginTypes'

const initialAuthState = {
  isAuthenticated: false,
  user: null,
  profile: null,
  error: null,
  loading: false
}

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_GOOGLE_REQUEST:
    case LOGIN_FACEBOOK_REQUEST:
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null }
    case LOGIN_GOOGLE_SUCCESS:
    case LOGIN_FACEBOOK_SUCCESS:
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', JSON.stringify(action.payload.token))
      localStorage.setItem('user', JSON.stringify(action.payload))
      return { ...state, isAuthenticated: true, user: action.payload, loading: false }
    case LOGIN_GOOGLE_FAIL:
    case LOGIN_FACEBOOK_FAIL:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return {
        isAuthenticated: false,
        user: null,
        error: action.payload ? action.payload : null,
        loading: false,
        profile: null
      }
    default:
      return state
  }
}


export const profileReducer = (state = { loading: false, profile: null, error: null, succes: null }, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state, loading: true
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      }
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
        success: true
      }
    case UPDATE_PROFILE_FAIL:
    case GET_PROFILE_FAIL:
      return {
        loading: false,
        profile: null,
        success: false,
        error: 'Some error occured',
      }
    default:
      return state
  }
}


