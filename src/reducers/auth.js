import { AUTH } from '../consts';

export default (state, action) => {
  switch (action.type) {
    case AUTH.SUCCESS:
      console.log(action);
      return state;
    default:
      return state || '1';
  }
};
