import { fork } from 'redux-saga/effects';

import { watchFetchMainPhotos, watchDispatchFeedback } from './main_screen';
import { watchFetchCategories, watchFetchGalleryPhotos } from './gallery';
import {
  watchUploadPhoto,
  watchUploadCategory,
  watchiFetchAdminPhotos,
} from './admin';

export default function* sagas() {
  yield* [
    fork(watchFetchMainPhotos),
    fork(watchDispatchFeedback),

    fork(watchFetchCategories),
    fork(watchFetchGalleryPhotos),

    fork(watchUploadPhoto),
    fork(watchUploadCategory),
    fork(watchiFetchAdminPhotos),
  ];
}
