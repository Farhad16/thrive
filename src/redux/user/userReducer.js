import {
  FETCH_USER_DETAULS_REQUEST,
  FETCH_USER_DETAULS_SUCCESS,
  FETCH_USER_DETAULS_FAILURE,
} from "./userTypes"

const initialState = {
  loading: false,
  user: {},
  error: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DETAULS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case  FETCH_USER_DETAULS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: '',
      }
    case FETCH_USER_DETAULS_FAILURE:
      return {
        loading: false,
        user: {},
        error: action.payload
      }
    default: return state
  }
}

export default userReducer;