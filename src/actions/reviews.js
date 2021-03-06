import { REVIEWS } from './../consts';

export default {
  pending: isAdmin => ({ type: REVIEWS.REVIEWS_PENDING, isAdmin }),
  success: data => ({ type: REVIEWS.REVIEWS_SUCCESS, data }),
  error: error => ({ type: REVIEWS.REVIEWS_ERROR, error }),

  setEmpty: () => ({ type: REVIEWS.SET_EMPTY }),

  upload: info => ({
    type: REVIEWS.UPLOAD_REVIEW,
    info,
  }),
  uploadSuccess: success => ({
    type: REVIEWS.UPLOAD_REVIEW_SUCCESS,
    success,
  }),
  uploadError: error => ({
    type: REVIEWS.UPLOAD_REVIEW_ERROR,
    error,
  }),

  set: event => ({ type: REVIEWS.SET, event }),

  approve: isApproved => ({ type: REVIEWS.APPROVE_REVIEW, isApproved }),

  uploadImage: image => ({ type: REVIEWS.UPLOAD_REVIEW_IMAGE, image }),
  uploadImageSuccess: success => ({
    type: REVIEWS.UPLOAD_REVIEW_IMAGE_SUCCESS,
    success,
  }),
  uploadImageError: error => ({
    type: REVIEWS.UPLOAD_REVIEW_IMAGE_ERROR,
    error,
  }),
};
