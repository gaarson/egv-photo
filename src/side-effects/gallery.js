import { put, takeLatest } from 'redux-saga/effects';

import agent from './agent';
import { isEmpty } from '../utils';
import { GALLERY } from '../consts';
import { gallery } from '../actions';

function* fetchCategories() {
  try {
    let { body } = yield agent.get('/api/categories');

    if (isEmpty(body)) body = [];

    yield put(gallery.categoriesSuccess(body));
  } catch (error) {
    yield put(gallery.categoriesError(error));
  }
}

function* fetchGalleryPhotos({ category, page }) {
  try {
    let { body } = yield agent.get('/api/photos').query({ category, page });

    if (isEmpty(body)) body = [];

    yield put(gallery.success(body));
  } catch (error) {
    yield put(gallery.error(error));
  }
}

export default function* watchFetchGallery() {
  yield takeLatest(GALLERY.PHOTOS_PENDING, fetchGalleryPhotos);
  yield takeLatest(GALLERY.CATEGORIES_PENDING, fetchCategories);
}
