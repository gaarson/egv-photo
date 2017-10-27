import { BLOG } from '../consts';

export const article = (
  state = {
    id: null,
    title: 'title',
    description: 'safsafsafsafsaasfsafsafsaf',
    photos: [],
  },
  action,
) => {
  switch (action.type) {
    case BLOG.ARTICLE_SUCCESS:
      return state;
    default:
      return state || {};
  }
};

export const news = (state = [], action) => {
  switch (action.type) {
    case BLOG.SUCCESS:
      return state;
    default:
      return state || [];
  }
};
