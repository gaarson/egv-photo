import { GALLERY } from './../consts';

export default {
  categoriesPending: category => ({
    type: GALLERY.CATEGORIES_PENDING,
    category,
  }),
  categoriesSuccess: data => ({ type: GALLERY.CATEGORIES_SUCCESS, data }),
  categoriesError: error => ({ type: GALLERY.CATEGORIES_ERROR, error }),

  pending: (category, page) => ({ type: GALLERY.PHOTOS_PENDING, category, page }),
  success: data => ({ type: GALLERY.PHOTOS_SUCCESS, data }),
  error: error => ({ type: GALLERY.PHOTOS_ERROR, error }),

  changeCategory: id => ({ type: GALLERY.CHANGE_CATEGORY, id }),
  move: event => ({ type: GALLERY.LIGHTBOX_MOVE, event }),
  open: event => ({ type: GALLERY.LIGHTBOX_OPEN, event }),
  close: () => ({ type: GALLERY.LIGHTBOX_CLOSE }),
};
