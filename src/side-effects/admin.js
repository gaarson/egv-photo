import { put, takeLatest } from 'redux-saga/effects';
import request from 'superagent';
import prefix from 'superagent-prefix';
import use from 'superagent-use';

import isEmpty from './utils';
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

function* fetchUploadCategory({ category }) {
  try {
    const cat = yield agent.post('/api/categories').send(category);
    yield put(admin.addCategorySuccess(cat));
  } catch (error) {
    yield put(admin.addCategoryError(error));
  }
}

function* fetchAdminPhotos() {
  try {
    const photos = yield agent.get('/api/photos');

    if (isEmpty(photos.body)) photos.body = [];

    yield put(admin.photosSuccess(photos.body));
  } catch (error) {
    yield put(admin.photosError(error));
  }
}

function* fetchDeletePhoto({ photo }) {
  try {
    const success = yield agent.delete('/api/photos').query({
      id: photo.id,
      src: photo.src,
    });
    yield put(admin.deletePhotoSuccess(success));
  } catch (error) {
    yield put(admin.deletePhotoError(error));
  }
}

function* fetchDeleteCategory({ category }) {
  try {
    const success = yield agent.delete('/api/categories').query({
      id: category.id,
      src: category.src,
    });

    yield put(admin.deleteCategorySuccess(success));
  } catch (error) {
    yield put(admin.deleteCategoryError(error));
  }
}

export { agent };
export function* watchFetchAdmin() {
  yield takeLatest(ADMIN.ADD_CATEGORY, fetchUploadCategory);
  yield takeLatest(ADMIN.UPLOAD_PHOTO, fetchUploadPhoto);
  yield takeLatest(ADMIN.PHOTOS_PENDING, fetchAdminPhotos);
  yield takeLatest(ADMIN.DELETE_PHOTO, fetchDeletePhoto);
  yield takeLatest(ADMIN.DELETE_CATEGORY, fetchDeleteCategory);
}
