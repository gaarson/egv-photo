import { put, takeLatest } from 'redux-saga/effects';

import agent from './agent';
import { isEmpty } from '../utils';
import { REVIEWS } from '../consts';
import { reviews } from '../actions';

function* fetchReviews() {
  try {
    let { body } = yield agent.get('/api/reviews');

    if (isEmpty(body)) body = [];

    yield put(reviews.success(body));
  } catch (error) {
    yield put(reviews.error(error));
  }
}

function* uploadReview() {
  try {
    const { body } = yield agent.post('/api/reviews');

    // if (isEmpty(body)) body = [];
    // else body[0].active = true;

    yield put(reviews.uploadSuccess(body));
  } catch (error) {
    yield put(reviews.uploadError(error));
  }
}

function* approveReview({ isApproved }) {
  try {
    const { body } = yield agent
      .get('/api/reviews')
      .query({ answer: isApproved });

    yield put(reviews.uploadSuccess(body));
  } catch (error) {
    yield put(reviews.uploadError(error));
  }
}

export default function* watchFetchReviews() {
  yield takeLatest(REVIEWS.REVIEWS_PENDING, fetchReviews);
  yield takeLatest(REVIEWS.UPLOAD_REVIEW, uploadReview);

  yield takeLatest(REVIEWS.APPROVE_REVIEW, approveReview);
}
