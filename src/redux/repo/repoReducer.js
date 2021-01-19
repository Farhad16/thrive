
import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  FETCH_REPOS_BY_DATE,
} from "./repoTypes"


const initialState = {
  loading: false,
  routine: [],
  error: '',
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        routine: action.payload,
        error: '',
      }
    case FETCH_REPOS_FAILURE:
      return {
        loading: false,
        routine: [],
        error: action.payload
      }
    default: return state
  }
}

export default productReducer