import { ADMIN, AUTH } from "../consts";

export default {
  photosPending: categoryId => ({ type: ADMIN.PHOTOS_PENDING, categoryId }),
  photosSuccess: data => ({ type: ADMIN.PHOTOS_SUCCESS, data }),
  photosError: error => ({ type: ADMIN.PHOTOS_ERROR, error }),

  getPhoto: photoId => ({ type: ADMIN.GET_PHOTO, photoId }),
  getPhotoSuccess: photo => ({ type: ADMIN.GET_PHOTO_SUCCESS, photo }),
  getPhotoError: error => ({ type: ADMIN.GET_PHOTO_ERROR, error }),

  deletePhoto: photoId => ({ type: ADMIN.DELETE_PHOTO, photoId }),
  deletePhotoSuccess: photo => ({ type: ADMIN.DELETE_PHOTO_SUCCESS, photo }),
  deletePhotoError: error => ({ type: ADMIN.DELETE_PHOTO_ERROR, error }),

  uploadPhoto: photoId => ({ type: ADMIN.UPLOAD_PHOTO, photoId }),
  uploadPhotoSuccess: photo => ({ type: ADMIN.UPLOAD_PHOTO_SUCCESS, photo }),
  uploadPhotoError: error => ({ type: ADMIN.UPLOAD_PHOTO_ERROR, error }),

  updatePhoto: photoId => ({ type: ADMIN.UPDATE_PHOTO, photoId }),
  updatePhotoSuccess: photo => ({ type: ADMIN.UPDATE_PHOTO_SUCCESS, photo }),
  updatePhotoError: error => ({ type: ADMIN.UPDATE_PHOTO_ERROR, error }),

  addCategory: category => ({ type: ADMIN.ADD_CATEGORY, category }),
  addCategorySuccess: category => ({
    type: ADMIN.ADD_CATEGORY_SUCCESS,
    category
  }),
  addCategoryError: error => ({ type: ADMIN.ADD_CATEGORY_ERROR, error }),

  removeCategory: categoryId => ({ type: ADMIN.REMOVE_CATEGORY, categoryId }),
  removeCategorySuccess: () => ({ type: ADMIN.REMOVE_CATEGORY_SUCCESS }),
  removeCategoryError: error => ({ type: ADMIN.REMOVE_CATEGORY_ERROR, error }),

  fillForm: event => ({ type: ADMIN.FILL_PHOTO_FORM, event }),
  fillCategoryForm: event => ({ type: ADMIN.FILL_CATEGORY_FORM, event }),

  auth: admin => ({ type: AUTH.PENDING, admin }),
  authSuccess: () => ({ type: AUTH.SUCCESS }),
  authError: error => ({ type: AUTH.ERROR, error })
};
