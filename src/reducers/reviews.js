import { REVIEWS } from '../consts';

export const reviews = (state, action) => {
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
    case REVIEWS.UPLOAD_REVIEW_SUCCESS:
      return state.map(item => {
        if (item.id === action.success.id) return action.success;
        else if (!action.success.isValid) return { ...item, newReview: false };
      });
    default:
      return state || [];
  }
};

export const editReview = (
  state = {
    name: '',
    description: '',
  },
  action,
) => {
  switch (action.type) {
    case REVIEWS.SET:
      return { ...state, [action.event.id]: action.event.value };
    default:
      return state || {};
  }
};
