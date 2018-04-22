import { put, takeLatest } from 'redux-saga/effects';

import agent from './agent';
import { isEmpty } from '../utils';
import { REVIEWS } from '../consts';
import { reviews } from '../actions';

function* fetchReviews({ isAdmin }) {
  try {
    let { body } = yield agent.get('/api/reviews').query({ isAdmin });

    if (isEmpty(body)) body = [];

    yield put(reviews.success(body));
  } catch (error) {
    yield put(reviews.error(error));
  }
}

function* uploadReview({ info }) {
  try {
    const { body } = yield agent.post('/api/reviews').send(info);

    // if (isEmpty(body)) body = [];
    // else body[0].active = true;

    yield put(reviews.uploadSuccess(body));
  } catch (error) {
    yield put(reviews.uploadError(error));
  }
}

function* uploadImage({ image }) {
  try {
    const preparedImage = new FormData();
    preparedImage.append('file', image.files[0], image.id);

    const { body } = yield agent.post('/api/reviews').send(preparedImage);
    alert('фото зкгружено');
  } catch (error) {
    yield put(reviews.uploadError(error));
  }
}

function* approveReview({ isApproved }) {
  try {
    const { body } = yield agent.post('/api/reviews').send(isApproved);

    yield put(reviews.uploadSuccess(body));
  } catch (error) {
    yield put(reviews.uploadError(error));
  }
}

export default function* watchFetchReviews() {
  yield takeLatest(REVIEWS.REVIEWS_PENDING, fetchReviews);
  yield takeLatest(REVIEWS.UPLOAD_REVIEW, uploadReview);

  yield takeLatest(REVIEWS.UPLOAD_REVIEW_IMAGE, uploadImage);

  yield takeLatest(REVIEWS.APPROVE_REVIEW, approveReview);
}
