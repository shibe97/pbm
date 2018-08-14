import * as c from '../constants/users';

const initialState = {
  isGettingUser: false,
  user: {
  },
};

export function users(state = initialState, action) {
  switch (action.type) {
    case c.RESET_USERS:
      return initialState;
    default:
      return state;
  }
}
