import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { admin } from '../../../actions';

import './Sidebar.css';

const mapStateToProps = ({ adminPhotos, adminCategories, adminNews }) => ({
  adminPhotos,
  adminCategories,
  adminNews,
});

const mapDispatchToProps = dispatch => ({
  deletePhoto: photo => dispatch(admin.deletePhoto(photo)),
  deleteCategory: category => dispatch(admin.deleteCategory(category)),
  deleteArticle: article => dispatch(admin.deleteArticle(article)),
});

const Sidebar = ({
  adminPhotos,
  adminCategories,
  adminNews,
  deletePhoto,
  deleteCategory,
  deleteArticle,
  route,
}) => {
  let list = [];
  let del = null;

  if (route.type === 'photos') {
    list = adminPhotos;
    del = deletePhoto;
  } else if (route.type === 'categories') {
    list = adminCategories;
    del = deleteCategory;
  } else if (route.type === 'news') {
    list = adminNews;
    del = deleteArticle;
  }

  return (
    <aside className="catalog catalog-js">
      <div className="close close-js">
        <i className="fa fa-times close-icon" aria-hidden="true" />
      </div>
      <ul className="change">
        <li>
          <Link to="/admin/categories">Категории</Link>
        </li>
        <li>
          <Link to="/admin/photos">Фото</Link>
        </li>
        <li>
          <Link to="/admin/news">Новости</Link>
        </li>
      </ul>
      <div className="catalog-content">
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <a>{item.title}</a>
              <a className="delete-photo" onClick={() => del(item)}>
                &times;
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  adminCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCategory: PropTypes.func.isRequired,
  adminNews: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteArticle: PropTypes.func.isRequired,
  adminPhotos: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePhoto: PropTypes.func.isRequired,
  route: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
