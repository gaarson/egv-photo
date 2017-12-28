import { MAIN } from '../consts';

export default {
  pending: section => ({ type: MAIN.PHOTOS_PENDING, section }),
  success: data => ({ type: MAIN.PHOTOS_SUCCESS, data }),
  error: error => ({ type: MAIN.PHOTOS_ERROR, error }),

  setFeedback: data => ({ type: MAIN.SET_FEEDBACK_INFO, data }),
  sendFeedback: data => ({ type: MAIN.SEND_FEEDBACK, data }),
  sendFeedbackSuccess: () => ({ type: MAIN.SEND_FEEDBACK_SUCCESS }),
  sendFeedbackError: error => ({ type: MAIN.SEND_FEEDBACK_ERROR, error }),

  newsPending: () => ({ type: MAIN.NEWS_PENDING }),
  newsSuccess: news => ({ type: MAIN.NEWS_SUCCESS, news }),
  newsError: error => ({ type: MAIN.NEWS_ERROR, error }),
};
