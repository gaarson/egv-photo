import { fork } from 'redux-saga/effects';

import { watchFetchMainPhotos, watchDispatchFeedback } from './main_screen';
import watchFetchGallery from './gallery';
import { watchFetchAdmin } from './admin';
import watchFetchReviews from './reviews';

export default function* sagas() {
  yield* [
    fork(watchFetchReviews),
    fork(watchFetchMainPhotos),
    fork(watchDispatchFeedback),

    fork(watchFetchGallery),

    fork(watchFetchAdmin),
  ];
}
