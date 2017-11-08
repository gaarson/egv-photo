import { ADMIN } from '../consts';

const arr = [
  {
    id: 0,
    src: '/img/1.jpg',
    title: 'name',
    caption: 'asfsasaf',
    width: 800,
    height: 400,
  },
  {
    id: 1,
    src: '/img/2.jpg',
    title: 'name',
    caption: 'asfsasaf',
    width: 600,
    height: 400,
  },
  {
    id: 2,
    src: '/img/3.jpg',
    title: 'name',
    caption: 'asfsasaf',
    width: 800,
    height: 400,
  },
  {
    id: 3,
    src: '/img/4.png',
    title: 'name',
    caption: 'asfsasaf',
    width: 800,
    height: 400,
  },
  {
    id: 4,
    src: '/img/5.jpg',
    title: 'name',
    caption: 'asfsasaf',
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

export const adminPhotos = (state = arr, action) => {
  switch (action.type) {
    case ADMIN.DELETE_PHOTO_SUCCESS:
      return state;
    case ADMIN.PHOTOS_SUCCESS:
      return state;
    default:
      return state || [];
  }
};

export const editPhoto = (
  state = {
    src: '',
    caption: '',
    name: '',
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
        val = new FormData();
        val.append('newpic', action.event.files[0]);
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
  },
  action,
) => {
  switch (action.type) {
    case ADMIN.ADD_CATEGORY_SUCCESS:
      return state;
    case ADMIN.FILL_CATEGORY_FORM:
      return state;
    default:
      return state || {};
  }
};

export const adminCategories = (state = categories, action) => {
  switch (action.type) {
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
