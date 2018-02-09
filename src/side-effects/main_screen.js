import { call, put, select, takeLatest } from 'redux-saga/effects';
import agent from './agent';

import { MAIN } from '../consts';
import { mainScreen } from '../actions';
import { getFeedbackState } from '../utils';

function* dispatchFeedback() {
  try {
    const feedback = yield select(getFeedbackState);
    console.log(feedback);
    const success = yield agent.post('/api/feedback').send({ feedback });
    console.log(success);
    yield put(mainScreen.sendFeedbackSuccess());
  } catch (error) {
    yield put(mainScreen.error(error));
  }
}

function* fetchMainPhotos({ section }) {
  try {
    const photos = yield agent.get('/api/main').query({ section });
    yield put(mainScreen.success(photos.body));
  } catch (error) {
    console.log(error);
    yield put(mainScreen.error(error));
  }
}

function* fetchFreshNews() {
  try {
    const news = yield call(agent.get('/api/main/news'));
    yield put(mainScreen.newsSuccess(news));
  } catch (error) {
    yield put(mainScreen.newsError(error));
  }
}

export function* watchFetchFreshNews() {
  yield takeLatest(MAIN.NEWS_PENDING, fetchFreshNews);
}

export function* watchDispatchFeedback() {
  yield takeLatest(MAIN.SEND_FEEDBACK, dispatchFeedback);
}

export function* watchFetchMainPhotos() {
  yield takeLatest(MAIN.PHOTOS_PENDING, fetchMainPhotos);
}
