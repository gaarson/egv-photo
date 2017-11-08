import { put, takeLatest } from 'redux-saga/effects';
import request from 'superagent';
import prefix from 'superagent-prefix';
import use from 'superagent-use';

import { ADMIN } from '../consts';
import { admin } from '../actions';

const agent = use(request);

agent.use(prefix('http://127.0.0.1:3030'));

function* fetchUploadPhoto({ photo }) {
  try {
    console.log(photo);
    const success = yield agent.post('/api/photos').send(photo);
    console.log(success);
    yield put(admin.uploadPhotoSuccess(success));
  } catch (error) {
    yield put(admin.uploadPhotoError(error));
  }
}

function* fetchUplaodPhotoInfo({ info }) {
  try {
    console.log(info);
    const photo = yield agent.post('/api/photos').send(info);
    yield put(admin.updatePhotoSuccess(photo));
  } catch (error) {
    yield put(admin.uploadPhotoError(error));
  }
}

export { agent };
export function* watchUploadPhoto() {
  yield takeLatest(ADMIN.UPLOAD_PHOTO, fetchUploadPhoto);
}
export function* watchUploadPhotoInfo() {
  yield takeLatest(ADMIN.UPDATE_PHOTO, fetchUplaodPhotoInfo);
}
