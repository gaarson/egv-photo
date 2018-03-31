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
      return {
        ...state,
        images: action.data.map(image => ({
          ...image,
          caption: `${image.title} ${image.caption}`,
          src: image.src.replace(/.thumb./g, '.'),
        })),
      };
    case GALLERY.LIGHTBOX_OPEN:
      console.log(action);
      return {
        ...state,
        open: true,
        currentImage: +action.event.index,
      };
    case GALLERY.LIGHTBOX_CLOSE:
      return { ...state, open: false };
    case GALLERY.LIGHTBOX_MOVE: {
      console.log('action', action);
      let { currentImage } = state;
      if (action.event === 1) currentImage += 1;
      if (action.event === -1) currentImage -= 1;
      if (currentImage >= state.images.length) currentImage = 0;
      return {
        ...state,
        currentImage,
      };
    }
    default:
      return state || {};
  }
};
