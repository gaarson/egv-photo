import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'superagent';

import { GALLERY } from '../consts';
import { gallery } from '../actions';

function* fetchCategories() {
  try {
    const categories = yield call(request.get('/api/categories'));
    yield put(gallery.categoriesSuccess(categories));
  } catch (error) {
    yield put(gallery.categoriesError(error));
  }
}

function* fetchGalleryPhotos({ categoryId, page }) {
  try {
    const photos = yield call(
      request.get(`/api/photos/${categoryId}`).query({ page }),
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
  yield takeLatest(GALLERY.CATEGOGIES_PENDING, fetchCategories);
}
