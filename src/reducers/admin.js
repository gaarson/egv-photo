import { ADMIN, GALLERY } from '../consts';

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

export const adminNews = (state = [], action) => {
  switch (action.type) {
    default:
      return state || [];
  }
};

export const editArticle = (state = {}, action) => {
  switch (action.type) {
    default:
      return state || {};
  }
};

export const adminPhotos = (state, action) => {
  switch (action.type) {
    case ADMIN.DELETE_PHOTO_SUCCESS:
      return state;
    case ADMIN.PHOTOS_SUCCESS:
      return action.data;
    default:
      return state || [];
  }
};

export const editPhoto = (
  state = {
    src: '',
    caption: '',
    name: '',
    category_id: 1,
    id: null,
    file: null,
  },
  action,
) => {
  switch (action.type) {
    case ADMIN.GET_PHOTO_SUCCESS:
      return state;
    case ADMIN.UPDATE_PHOTO_SUCCESS:
      return state;
    case ADMIN.FILL_PHOTO_FORM: {
      let val = null;
      if (action.event.files) {
        [val] = action.event.files;
      } else {
        val = action.event.value;
      }
      return { ...state, [action.event.id]: val };
    }
    default:
      return state || {};
  }
};

export const editCategory = (
  state = {
    id: null,
    title: '',
    src: '',
    file: null,
  },
  action,
) => {
  switch (action.type) {
    case ADMIN.ADD_CATEGORY_SUCCESS:
      return state;
    case ADMIN.FILL_CATEGORY_FORM: {
      let val = null;
      if (action.event.files) {
        [val] = action.event.files;
      } else {
        val = action.event.value;
      }
      return { ...state, [action.event.id]: val };
    }
    default:
      return state || {};
  }
};

export const adminCategories = (state = [], action) => {
  switch (action.type) {
    case GALLERY.CATEGORIES_SUCCESS:
      return action.data;
    case ADMIN.ADD_CATEGORY_SUCCESS:
      return state;
    case ADMIN.REMOVE_CATEGORY_SUCCESS:
      return state;
    default:
      return state || [];
  }
};

export const authorize = (state, action) => {
  switch (action.type) {
    default:
      return state || {};
  }
};
