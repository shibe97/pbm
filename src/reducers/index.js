import { combineReducers } from 'redux';
import { users } from '../reducers/users';

const reducers = combineReducers({
  users,
});

export default reducers;
