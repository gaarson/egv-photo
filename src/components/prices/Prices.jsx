import React from 'react';
import { connect } from 'react-redux';
import renderHtml from 'react-html-parser';

import { gallery } from '../../actions';

import './Prices.css';

const mapStateToProps = ({ galleryCategories }, { match: { params } }) => ({
  categories: galleryCategories,
  id: params.id,
});
const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(gallery.categoriesPending()),
});

const Prices = ({ categories, getCategories, id }) => {
  if (!categories.length) getCategories();
  return (
    <div className="prices">
      {categories.map(
        category =>
          category.id === +id && (
            <div key={category.id} className="prices__category">
              <h1>{category.title}</h1>
              <img src={'http://ezhukov.ru' + category.src} alt="" />
              <div className="text">{renderHtml(category.description)}</div>
            </div>
          ),
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Prices);
