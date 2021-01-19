import axios from 'axios';

import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  FETCH_REPOS_BY_DATE,
} from "./repoTypes"

export const fetchRepoRequest = () => {
  return {
    type: FETCH_REPOS_REQUEST
  }
}

export const fetchRepoSuccess = (repos) => {
  return {
    type: FETCH_REPOS_SUCCESS,
    payload: repos
  }
}


export const fetchRepoFailure = (error) => {
  return {
    type: FETCH_REPOS_FAILURE,
    payload: error
  }
}
export const fetchRepos = () => {
  return (dispatch) => {
    dispatch(fetchRepoRequest())
    axios
      .get('https://api.github.com/users/rakibtg/repos')
      .then(response => {
        const users = response.data
        dispatch(fetchRepoSuccess(users))
      })
      .catch(error => {
        dispatch(fetchRepoFailure(error.message))
      })
  }
}

export const filterProductsBySize = (products, size) => {
  return {
    type: FETCH_REPOS_BY_DATE,
    payload: {
      size: size,
      product: size === 'ALL' ? products
        : products.filter(x => x.availableSizes.indexOf(size) >= 0)
    }
  }
}


