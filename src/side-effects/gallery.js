import { call, put, takeLatest } from 'redux-saga/effects';
import { agent } from './admin.js';

import { GALLERY } from '../consts';
import { gallery } from '../actions';

function* fetchCategories() {
  try {
    const categories = yield agent.get('/api/categories');
    yield put(gallery.categoriesSuccess(categories.body));
  } catch (error) {
    yield put(gallery.categoriesError(error));
  }
}

function* fetchGalleryPhotos({ categoryId, page }) {
  try {
    const photos = yield call(
      agent.get(`/api/photos/${categoryId}`).query({ page }),
    );
    yield put(gallery.success(photos));
  } catch (error) {
    yield put(gallery.error(error));
  }
}

export function* watchFetchGalleryPhotos() {
  yield takeLatest(GALLERY.PHOTOS_PENDING, fetchGalleryPhotos);
}
export function* watchFetchCategories() {
  yield takeLatest(GALLERY.CATEGORIES_PENDING, fetchCategories);
}
