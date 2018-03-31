import { REVIEWS } from '../consts';

export default (state, action) => {
  switch (action.type) {
    case REVIEWS.REVIEWS_SUCCESS:
      return action.data;
    case REVIEWS.SET_EMPTY: {
      return [
        ...state,
        {
          newReview: true,
          name: '',
          description: '',
        },
      ];
    }
    default:
      return state || [];
  }
};
