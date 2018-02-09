import { MAIN, GALLERY, ADMIN } from '../consts';

export default (state, action) => {
  switch (action.type) {
    case MAIN.PHOTOS_ERROR:
      return console.log(action.error);
    case MAIN.SEND_FEEDBACK_ERROR:
      return console.log(action.error);
    case GALLERY.CATEGOGIES_ERROR:
      return console.log(action.error);
    case GALLERY.PHOTOS_ERROR:
      return console.log(action.error);
    case ADMIN.ADD_CATEGORY_ERROR:
      return console.log(action.error);
    case ADMIN.GET_PHOTO_ERROR:
      return console.log(action.error);
    case ADMIN.PHOTOS_ERROR:
      return console.log(action.error);
    case ADMIN.UPDATE_PHOTO_ERROR:
      return console.log(action.error);
    default:
      return state || {};
  }
};
