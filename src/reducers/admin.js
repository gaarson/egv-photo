import { ADMIN, GALLERY } from '../consts';
import { EditorState } from 'draft-js';

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
      const newState = state.map(
        photo => (photo.id === action.photo.id ? action.photo : photo),
      );
      return [...new Set([...newState, action.photo])];
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
    case ADMIN.UPLOAD_PHOTO_SUCCESS:
      window.alert('Фото добавлено!');
      return {
        ...state,
        src: '',
        caption: '',
        main: 0,
        name: '',
        id: null,
        file: null,
        uploading: false,
      };
    case ADMIN.UPLOAD_PHOTO_ERROR: {
      alert('Ошибка при загрузке фотографии');
      return { ...state, uploading: false };
    }
    case ADMIN.FILL_PHOTO_FORM: {
      let val = null;
      if (action.event.files) {
        [val] = action.event.files;
      } else if (
        Object.prototype.hasOwnProperty.call(action.event, 'checked')
      ) {
        val = action.event.checked ? 1 : 0;
      } else {
        val = action.event.value;
      }
      return { ...state, [action.event.id]: val };
    }
    case ADMIN.GET_PHOTO_SUCCESS: {
      return {
        id: action.photo.id,
        name: action.photo.title,
        caption: action.photo.caption,
        main: action.photo.is_main,
        category_id: action.photo.category_id,
      };
    }
    default:
      return state || {};
  }
};

export const editCategory = (
  state = {
    id: null,
    name: '',
    caption: EditorState.createEmpty(),
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
        caption: EditorState.createEmpty(),
        src: '',
        file: null,
        uploading: false,
      };
    case ADMIN.ADD_CATEGORY_ERROR: {
      alert('Произошла ошибка при загрузке, попробуйте еще раз');
      return { ...state, uploading: false };
    }
    case ADMIN.FILL_CATEGORY_FORM: {
      let val = null;
      console.log(action);
      if (action.event.files) {
        [val] = action.event.files;
      } else if (action.event.id) {
        val = action.event.value;
      } else {
        val = action.event;
        return { ...state, caption: val };
      }
      return { ...state, [action.event.id]: val };
    }
    case ADMIN.GET_CATEGORY_SUCCESS: {
      return {
        ...state,
        id: action.category.id,
        name: action.category.title,
        caption: EditorState.createEmpty(), //action.category.description,
      };
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
      const newState = state.map(
        cat => (cat.id === action.category.id ? action.category : cat),
      );
      return [...new Set([...newState, action.category])];
    case ADMIN.DELETE_CATEGORY_SUCCESS:
      console.log('del category', action);
      return state.filter(cat => cat.id !== action.category.id);
    case ADMIN.SET_ACTIVE_CATEGORY:
      return state.map(cat => {
        if (cat.id === action.id) {
          return { ...cat, active: !cat.active };
        }
        return cat;
      });
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
