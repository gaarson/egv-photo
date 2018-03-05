import { ADMIN, AUTH } from '../consts';

export default {
  photosPending: () => ({ type: ADMIN.PHOTOS_PENDING }),
  photosSuccess: data => ({ type: ADMIN.PHOTOS_SUCCESS, data }),
  photosError: error => ({ type: ADMIN.PHOTOS_ERROR, error }),

  getPhoto: id => ({ type: ADMIN.GET_PHOTO, id }),
  getPhotoSuccess: photo => ({ type: ADMIN.GET_PHOTO_SUCCESS, photo }),
  getPhotoError: error => ({ type: ADMIN.GET_PHOTO_ERROR, error }),

  deletePhoto: photo => ({ type: ADMIN.DELETE_PHOTO, photo }),
  deletePhotoSuccess: photo => ({ type: ADMIN.DELETE_PHOTO_SUCCESS, photo }),
  deletePhotoError: error => ({ type: ADMIN.DELETE_PHOTO_ERROR, error }),

  uploadPhoto: photo => ({ type: ADMIN.UPLOAD_PHOTO, photo }),
  uploadPhotoSuccess: photo => ({ type: ADMIN.UPLOAD_PHOTO_SUCCESS, photo }),
  uploadPhotoError: error => ({ type: ADMIN.UPLOAD_PHOTO_ERROR, error }),

  updatePhoto: info => ({ type: ADMIN.UPDATE_PHOTO, info }),
  updatePhotoSuccess: photo => ({ type: ADMIN.UPDATE_PHOTO_SUCCESS, photo }),
  updatePhotoError: error => ({ type: ADMIN.UPDATE_PHOTO_ERROR, error }),

  addCategory: category => ({ type: ADMIN.ADD_CATEGORY, category }),
  addCategorySuccess: category => ({
    type: ADMIN.ADD_CATEGORY_SUCCESS,
    category,
  }),
  addCategoryError: error => ({ type: ADMIN.ADD_CATEGORY_ERROR, error }),

  getCategory: id => ({ type: ADMIN.GET_CATEGORY, id }),
  getCategorySuccess: category => ({
    type: ADMIN.GET_CATEGORY_SUCCESS,
    category,
  }),
  getCategoryError: error => ({ type: ADMIN.GET_CATEGORY_ERROR, error }),

  deleteCategory: category => ({ type: ADMIN.DELETE_CATEGORY, category }),
  deleteCategorySuccess: category => ({
    type: ADMIN.DELETE_CATEGORY_SUCCESS,
    category,
  }),
  deleteCategoryError: error => ({ type: ADMIN.DELETE_CATEGORY_ERROR, error }),

  fillForm: event => ({ type: ADMIN.FILL_PHOTO_FORM, event }),
  fillCategoryForm: event => ({ type: ADMIN.FILL_CATEGORY_FORM, event }),

  auth: admin => ({ type: AUTH.PENDING, admin }),
  authSuccess: () => ({ type: AUTH.SUCCESS }),
  authError: error => ({ type: AUTH.ERROR, error }),

  newsPending: () => ({ type: ADMIN.NEWS_ERROR }),
  newsSuccess: news => ({ type: ADMIN.NEWS_SUCCESS, news }),
  newsError: error => ({ type: ADMIN.NEWS_ERROR, error }),

  deleteArticle: id => ({ type: ADMIN.DELETE_ARTICLE, id }),
  deleteArticleSuccess: () => ({ type: ADMIN.DELETE_ARTICLE_SUCCESS }),
  deleteArticleError: error => ({ type: ADMIN.DELETE_ARTICLE_ERROR, error }),

  editArticle: event => ({ type: ADMIN.EDIT_ARTIClE, event }),
  setActiveCategory: id => ({ type: ADMIN.SET_ACTIVE_CATEGORY, id }),
};
