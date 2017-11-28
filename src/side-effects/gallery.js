import { put, takeLatest } from 'redux-saga/effects';

import { agent } from './admin';
import isEmpty from './utils';
import { GALLERY } from '../consts';
import { gallery } from '../actions';

function* fetchCategories() {
  try {
    const categories = yield agent.get('/api/categories');

    if (isEmpty(categories.body)) categories.body = [];

    yield put(gallery.categoriesSuccess(categories.body));
  } catch (error) {
    yield put(gallery.categoriesError(error));
  }
}

function* fetchGalleryPhotos({ category, page }) {
  try {
    const photos = yield agent.get(`/api/photos/${category}`).query({ page });
    yield put(gallery.success(photos));
  } catch (error) {
    yield put(gallery.error(error));
  }
}

export function* watchFetchGallery() {
  yield takeLatest(GALLERY.PHOTOS_PENDING, fetchGalleryPhotos);
  yield takeLatest(GALLERY.CATEGORIES_PENDING, fetchCategories);
}
