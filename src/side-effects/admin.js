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
    const success = yield agent.post('/api/photos').send(photo);
    yield put(admin.uploadPhotoSuccess(success));
  } catch (error) {
    yield put(admin.uploadPhotoError(error));
  }
}

function* fetchUploadCategory({ info }) {
  try {
    const category = yield agent.post('/api/categories').send(info);
    yield put(admin.addCategorySuccess(category));
  } catch (error) {
    yield put(admin.addCategoryError(error));
  }
}

function* fetchAdminPhotos() {
  try {
    const photos = yield agent.get('/api/photos');
    yield put(admin.photosSuccess(photos.body));
  } catch (error) {
    yield put(admin.photosError(error));
  }
}

export { agent };
export function* watchiFetchAdminPhotos() {
  yield takeLatest(ADMIN.PHOTOS_PENDING, fetchAdminPhotos);
}
export function* watchUploadPhoto() {
  yield takeLatest(ADMIN.UPLOAD_PHOTO, fetchUploadPhoto);
}
export function* watchUploadCategory() {
  yield takeLatest(ADMIN.ADD_CATEGORY, fetchUploadCategory);
}
