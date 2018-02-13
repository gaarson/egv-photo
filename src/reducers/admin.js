import { ADMIN, GALLERY } from '../consts';

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
    case ADMIN.UPLOAD_PHOTO_SUCCESS:
      console.log(action);
      return [...state, action.photo];
    case ADMIN.DELETE_PHOTO_SUCCESS: {
      return state.filter(photo => photo.id !== action.photo.id);
    }
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
    main: 0,
    name: '',
    category_id: 1,
    id: null,
    file: null,
    uploading: false,
  },
  action,
) => {
  switch (action.type) {
    case ADMIN.UPLOAD_PHOTO:
      return { ...state, uploading: true };
    case ADMIN.ADD_CATEGORY_SUCCESS:
      return { ...state, category_id: action.category.id };
    case GALLERY.CATEGORIES_SUCCESS:
      return { ...state, category_id: action.data[0] && action.data[0].id };
    case ADMIN.GET_PHOTO_SUCCESS:
      return state;
    case ADMIN.UPLOAD_PHOTO_SUCCESS:
      alert('Фото добавлено!');
      return {
        ...state,
        src: '',
        caption: '',
        main: 1,
        name: '',
        id: null,
        file: null,
        uploading: false,
      };
    case ADMIN.FILL_PHOTO_FORM: {
      let val = null;
      if (action.event.files) {
        [val] = action.event.files;
      } else if (Object.prototype.hasOwnProperty.call(action.event, 'checked')) {
        val = action.event.checked ? 1 : 0;
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
    name: '',
    caption: '',
    src: '',
    file: null,
    uploading: false,
  },
  action,
) => {
  switch (action.type) {
    case ADMIN.ADD_CATEGORY:
      return { ...state, uploading: true };
    case ADMIN.ADD_CATEGORY_SUCCESS:
      alert('Категория добавлена!');
      return {
        id: null,
        name: '',
        caption: '',
        src: '',
        file: null,
        uploading: false,
      };
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
      console.log(action);
      return [...state, action.category];
    case ADMIN.DELETE_CATEGORY_SUCCESS:
      console.log('del category', action);
      return state.filter(cat => cat.id !== action.category.id);
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
