import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_GOOGLE_FAIL,
  LOGIN_GOOGLE_SUCCESS,
  LOGIN_GOOGLE_REQUEST,
  LOGIN_FACEBOOK_FAIL,
  LOGIN_FACEBOOK_SUCCESS,
  LOGIN_FACEBOOK_REQUEST,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_REQUEST,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_REQUEST,

} from './types/loginTypes'
import axios from 'axios'

export const updateProfile = (name, email, password) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST
    })

    const config = {
      headers: {
        'x-auth-token': JSON.parse(localStorage.getItem('token'))
      }
    }

    const { data } = await axios.put('/api/auth', { name, email, password: password === '' ? null : password }, config)

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data
    })

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    })

  } catch (error) {
    console.log(error)
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response &&
        error.response.data.error ?
        error.response.data.error :
        error.message
    })
  }
}


export const getProfile = () => async dispatch => {
  try {
    dispatch({
      type: GET_PROFILE_REQUEST
    })
    console.log(localStorage.getItem('token'))

    const config = {
      headers: {
        'x-auth-token': JSON.parse(localStorage.getItem('token'))
      }
    }
    const { data } = await axios.get('/api/auth', config)
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data
    })


  } catch (error) {
    console.log(error)
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response &&
        error.response.data.error ?
        error.response.data.error :
        error.message
    })
  }
}

export const register = (name, email, password) => async dispatch => {
  try {
    dispatch({
      type: REGISTER_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post('/api/auth/register', { name, email, password }, config)

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    })


  } catch (error) {
    console.log(error.response.data.error)
    let errMsg = (error.response.data.error === 'USER_EXISTS'
      ? 'User with such Email already exists. Login instead?'
      : error.response.data.error
        ? error.response.data.error
        : error.message)
    console.log(errMsg)

    dispatch({
      type: REGISTER_FAIL,
      payload: errMsg
    })
  }
}

export const loginGoogle = (googleData) => async dispatch => {
  try {
    dispatch({
      type: LOGIN_GOOGLE_REQUEST
    })
    console.log('google ')
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post('/api/auth/google', googleData, config)

    dispatch({
      type: LOGIN_GOOGLE_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.log(error.response.data.error)
    let errMsg = (error.response.data.error === 'INVALID_CREDENTIALS'
      ? 'Email or Password incorrect'
      : error.response.data.error
        ? error.response.data.error
        : error.message)
    console.log(errMsg)

    dispatch({
      type: LOGIN_GOOGLE_FAIL,
      payload: errMsg
    })
  }
}

export const loginFacebook = (facebookData) => async dispatch => {
  try {
    dispatch({
      type: LOGIN_FACEBOOK_REQUEST
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post('/api/auth/facebook', facebookData, config)

    dispatch({
      type: LOGIN_FACEBOOK_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.log(error.response.data.error)
    let errMsg = (error.response.data.error === 'INVALID_CREDENTIALS'
      ? 'Email or Password incorrect'
      : error.response.data.error
        ? error.response.data.error
        : error.message)
    console.log(errMsg)

    dispatch({
      type: LOGIN_FACEBOOK_FAIL,
      payload: ''
    })
  }
}


export const login = (email, password) => async dispatch => {
  try {
    dispatch({
      type: LOGIN_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post('/api/auth', { email, password }, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    })


  } catch (error) {
    console.log(error.response.data.error)
    let errMsg = (error.response.data.error === 'INVALID_CREDENTIALS'
      ? 'Email or Password incorrect'
      : error.response.data.error
        ? error.response.data.error
        : error.message)
    console.log(errMsg)

    dispatch({
      type: LOGIN_FAIL,
      payload: errMsg
    })
  }
}
