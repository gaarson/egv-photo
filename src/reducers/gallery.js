import { GALLERY } from '../consts';

const arr = [
  {
    id: 0,
    src: '/img/1.jpg',
    caption: 'asfsasaf',
    width: 800,
    height: 400,
  },
  {
    id: 1,
    src: '/img/2.jpg',
    width: 600,
    height: 400,
  },
  {
    id: 2,
    src: '/img/3.jpg',
    width: 800,
    height: 400,
  },
  {
    id: 3,
    src: '/img/4.png',
    width: 800,
    height: 400,
  },
  {
    id: 4,
    src: '/img/5.jpg',
    width: 800,
    height: 400,
  },
];

const categories = [
  {
    id: 1,
    title: 'Свадьбы',
    pic: '/img/5.jpg',
    active: false,
  },
  {
    id: 2,
    title: 'Корпоративы',
    pic: '/img/3.jpg',
    active: true,
  },
  {
    id: 3,
    title: 'Сессии',
    pic: '/img/1.jpg',
    active: false,
  },
  {
    id: 4,
    title: 'Природа',
    pic: '/img/2.jpg',
    active: false,
  },
  {
    id: 54,
    title: 'Фотосеты',
    pic: '/img/1.jpg',
    active: false,
  },
];

export const galleryPhotos = (state = arr, action) => {
  switch (action.type) {
    case GALLERY.PHOTOS_SUCCESS:
      return action.data;
    default:
      return state || [];
  }
};

export const galleryCategories = (state = categories, action) => {
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
    images: arr,
    currentImage: 0,
  },
  action,
) => {
  switch (action.type) {
    case GALLERY.LIGHTBOX_OPEN:
      return {
        ...state,
        open: true,
        currentImage: +action.event.id,
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
