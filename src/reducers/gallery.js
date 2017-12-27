import { GALLERY } from '../consts';

export const galleryPhotos = (state, action) => {
  switch (action.type) {
    case GALLERY.PHOTOS_SUCCESS:
      return action.data;
    default:
      return state || [];
  }
};

export const galleryCategories = (state, action) => {
  switch (action.type) {
    case GALLERY.CATEGORIES_SUCCESS:
      return action.data;
    case GALLERY.CHANGE_CATEGORY:
      return state.map(
        cat =>
          cat.id === action.id
            ? { ...cat, active: true }
            : { ...cat, active: false },
      );
    default:
      return state || [];
  }
};

export const ligthBox = (
  state = {
    open: false,
    images: [],
    currentImage: 0,
  },
  action,
) => {
  switch (action.type) {
    case GALLERY.PHOTOS_SUCCESS:
      return { ...state, images: action.data };
    case GALLERY.LIGHTBOX_OPEN:
      return {
        ...state,
        open: true,
        currentImage: +action.event.id - 1,
      };
    case GALLERY.LIGHTBOX_CLOSE:
      return { ...state, open: false };
    case GALLERY.LIGHTBOX_MOVE:
      return {
        ...state,
        currentImage:
          action.event === 1 ? state.currentImage + 1 : state.currentImage - 1,
      };
    default:
      return state || {};
  }
};
