import axios from 'axios';

import {
  FETCH_USER_DETAULS_REQUEST,
  FETCH_USER_DETAULS_SUCCESS,
  FETCH_USER_DETAULS_FAILURE,
} from "./userTypes"

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_DETAULS_REQUEST
  }
}

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_DETAULS_SUCCESS,
    payload: user
  }
}


export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_DETAULS_FAILURE,
    payload: error
  }
}
export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest())
    axios
      .get('https://api.github.com/users/rakibtg')
      .then(response => {
        const user = response.data
        dispatch(fetchUserSuccess(user))
      })
      .catch(error => {
        dispatch(fetchUserFailure(error.message))
      })
  }
}

