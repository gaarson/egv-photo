import React from 'react';
import { connect } from 'react-redux';

import { gallery } from '../../actions';

import './Prices.css';

const mapStateToProps = ({ galleryCategories }) => ({ categories: galleryCategories });
const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(gallery.categoriesPending()),
});

const Prices = ({ categories, getCategories }) => {
  if (!categories.length) getCategories();
  console.log(categories);
  return (
    <div className="prices">
      {categories.map(category => (
        <div key={category.id} className="prices__category">
          <p>{category.title}</p>
          <img src={category.src} alt="" width="220px" />
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Prices);
