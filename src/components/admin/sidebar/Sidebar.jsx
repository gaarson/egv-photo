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
  setActiveCategory: id => dispatch(admin.setActiveCategory(id)),
  getPhoto: id => dispatch(admin.getPhoto(id)),
  getCategory: id => dispatch(admin.getCategory(id)),
});

const Sidebar = ({
  adminPhotos,
  adminCategories,
  adminNews,
  deletePhoto,
  deleteCategory,
  getCategory,
  getPhoto,
  setActiveCategory,
  deleteArticle,
  route,
}) => (
  <aside className="catalog catalog-js">
    {console.log(adminPhotos)}
    <div className="close close-js">
      <i className="fa fa-times close-icon" aria-hidden="true" />
    </div>
    <div className="catalog-content">
      <ul>
        {adminCategories.map(category => (
          <li key={category.id}>
            <a
              onClick={() => {
                setActiveCategory(category.id);
              }}
              style={{ fontSize: '16px', fontWeight: 'bold' }}
            >
              {category.title}
            </a>
            <Link
              to="categories"
              className="edit-category"
              onClick={() => getCategory(category.id)}
            >
              (ред.)
            </Link>
            <a
              className="delete-photo"
              onClick={() => {
                if (
                  window.confirm(`Уверены что хотите удалить ${category.title}`)
                ) {
                  deleteCategory(category);
                }
              }}
            >
              &times;
            </a>
            <ul
              className="admin-category-photos"
              style={{ display: !category.active ? 'none' : '' }}
            >
              {adminPhotos.map(
                item =>
                  +item.category_id === +category.id && (
                    <li key={item.id}>
                      <Link to="photos" onClick={() => getPhoto(item.id)}>
                        {item.title}
                      </Link>
                      <a
                        className="delete-photo"
                        onClick={() => {
                          if (
                            window.confirm(
                              `Уверены что хотите удалить ${item.title}`,
                            )
                          ) {
                            deletePhoto(item);
                          }
                        }}
                      >
                        &times;
                      </a>
                      <img src={item.src} alt="" width="200px" />
                    </li>
                  ),
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

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
