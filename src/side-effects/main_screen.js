import { call, put, takeLatest } from "redux-saga/effects";
import request from "superagent";

import { MAIN } from "../consts";
import { mainScreen } from "../actions";

function* dispatchFeedback({ feedback }) {
  try {
    yield call(request.post("/api/main/feedback").send({ feedback }));
    yield put(mainScreen.success("send"));
  } catch (error) {
    yield put(mainScreen.error(error));
  }
}

function* fetchMainPhotos({ section }) {
  try {
    const photos = yield call(request.get("/api/main").query({ section }));
    yield put(mainScreen.success(photos));
  } catch (error) {
    yield put(mainScreen.error(error));
  }
}

export function* watchDispatchFeedback() {
  yield takeLatest(MAIN.SEND_FEEDBACK, dispatchFeedback);
}

export function* watchFetchMainPhotos() {
  yield takeLatest(MAIN.PHOTOS_PENDING, fetchMainPhotos);
}
