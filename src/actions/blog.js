import { BLOG } from '../consts';

export default {
  blogPending: () => ({ type: BLOG.PENDING }),
  blogSuccess: data => ({ type: BLOG.SUCCESS, data }),
  blogError: error => ({ type: BLOG.ERROR, error }),
  articlePending: id => ({ type: BLOG.ARTICLE_PENDING, id }),
  articleSuccess: article => ({ type: BLOG.ARTICLE_SUCCESS, article }),
  articleError: error => ({ type: BLOG.ARTICLE_ERROR, error }),
};
