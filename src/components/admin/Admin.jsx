import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { admin, gallery, reviews } from '../../actions';

import Sidebar from './sidebar/Sidebar';
import Burger from './burger/Burger';
import Auth from './auth/Auth';
import PhotoForm from './photo-form/PhotoForm';
import CategoryForm from './category-form/CategoryForm';
import ArticleForm from './article-form/ArticleForm';
import ReviewForm from './ReviewForm';
import AdminsTypes from './AdminsTypes';

import './Admin.css';

const mapStateToProps = ({ auth }, { match: { params } }) => ({
  auth,
  params,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(gallery.categoriesPending()),
  getPhotos: () => dispatch(admin.photosPending()),
  getReviews: isAdmin => dispatch(reviews.pending(isAdmin)),
});

class Admin extends React.Component {
  componentDidMount() {
    this.props.getPhotos();
    this.props.getCategories();
    this.props.getReviews(true);

    const { $ } = window;
    const inputs = document.querySelectorAll('.input-file');

    Array.prototype.forEach.call(inputs, input => {
      const label = input.nextElementSibling;
      const labelVal = label.innerHTML;

      input.addEventListener('change', function cb1(e) {
        let fileName = '';
        if (this.files && this.files.length > 1) {
          fileName = (this.getAttribute('data-multiple-caption') || '').replace(
            '{count}',
            this.files.length,
          );
        } else {
          fileName = e.target.value.split('\\').pop();
        }

        if (fileName) label.querySelector('span').innerHTML = fileName;
        else label.innerHTML = labelVal;
      });
    });

    const burger = $('.burger-js');
    const catalog = $('.catalog-js');
    const close = $('.close-js');

    burger.on('click', () => {
      catalog.addClass('catalog--show');
    });
    close.on('click', () => {
      catalog.removeClass('catalog--show');
    });
  }

  render() {
    let admin = null;
    let form = null;
    const { type } = this.props.params;
    if (type === 'photos') form = <PhotoForm />;
    else if (type === 'categories') form = <CategoryForm />;
    else if (type === 'news') form = <ArticleForm />;
    else if (type === 'reviews') form = <ReviewForm />;

    if (this.props.auth) {
      admin = (
        <div>
          <AdminsTypes type={type} />
          <Burger />
          <Sidebar route={this.props.params} />
          {form}
        </div>
      );
    } else {
      admin = <Auth />;
    }
    return admin;
  }
}

Admin.propTypes = {
  auth: PropTypes.string.isRequired,
  getCategories: PropTypes.func.isRequired,
  getPhotos: PropTypes.func.isRequired,
  getReviews: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
