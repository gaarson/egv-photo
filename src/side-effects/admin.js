import { put, takeLatest } from 'redux-saga/effects';
import agent from './agent';

import isEmpty from './utils';
import { ADMIN } from '../consts';
import { admin } from '../actions';

function* fetchUploadPhoto({ photo }) {
  try {
    const { body } = yield agent.post('/api/photos').send(photo);

    yield put(admin.uploadPhotoSuccess(body));
  } catch (error) {
    yield put(admin.uploadPhotoError(error));
  }
}

function* fetchUploadCategory({ category }) {
  try {
    const { body } = yield agent.post('/api/categories').send(category);

    yield put(admin.addCategorySuccess(body));
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
    const { body } = yield agent.delete('/api/photos').query({
      id: photo.id,
      src: photo.src,
    });
    yield put(admin.deletePhotoSuccess(body[0]));
  } catch (error) {
    yield put(admin.deletePhotoError(error));
  }
}

function* fetchDeleteCategory({ category }) {
  try {
    const { body } = yield agent.delete('/api/categories').query({
      id: category.id,
      src: category.src,
    });

    yield put(admin.deleteCategorySuccess(body[0]));
  } catch (error) {
    yield put(admin.deleteCategoryError(error));
  }
}

export function* watchFetchAdmin() {
  yield takeLatest(ADMIN.ADD_CATEGORY, fetchUploadCategory);
  yield takeLatest(ADMIN.UPLOAD_PHOTO, fetchUploadPhoto);
  yield takeLatest(ADMIN.PHOTOS_PENDING, fetchAdminPhotos);
  yield takeLatest(ADMIN.DELETE_PHOTO, fetchDeletePhoto);
  yield takeLatest(ADMIN.DELETE_CATEGORY, fetchDeleteCategory);
}
