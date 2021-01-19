import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import repoReducer from './repo/repoReducer';

const rootReducer = combineReducers({
  users: userReducer,
  repos: repoReducer,
})

export default rootReducer