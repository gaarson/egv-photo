import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Photos from 'react-photo-gallery';
import LightBox from 'react-images';

import Category from './categories/Category';
import { gallery } from '../../actions';

import './Gallery.css';

const mapStateToProps = ({ 
  galleryPhotos,
  galleryCategories,
  ligthBox,
}) => ({
  galleryPhotos,
  galleryCategories,
  ligthBox,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(gallery.categoriesPending()),
  getPhotos: (category) => dispatch(gallery.pending(category)),
  move: e => dispatch(gallery.move(e)),
  open: e => dispatch(gallery.open(e.target)),
  close: () => dispatch(gallery.close()),
  change: (id) => {
    dispatch(gallery.changeCategory(id));
    dispatch(gallery.pending(id));
  },
});

const Gallery = ({
  getCategories,
  getPhotos,
  galleryPhotos,
  galleryCategories,
  ligthBox,
  change,
  close,
  move,
  open,
}) => (
  <div className="gallery-block">
    <div className="gallery-category">
      {
        galleryCategories.map(cat => (
          <Category
            key={cat.id}
            title={cat.title} 
            change={() => change(cat.id)}
            pic={cat.pic} 
            active={cat.active}
          />
        ))
      }
    </div>
    <Photos 
      photos={galleryPhotos} 
      onClick={open} 
    />
    <LightBox
      isOpen={ligthBox.open}
      images={ligthBox.images}
      currentImage={ligthBox.currentImage}
      onClickPrev={() => move(-1)}
      onClickNext={() => move(1)}
      onClickImage={() => move(1)}
      onClose={close}
    />
  </div>
);

Gallery.propTypes = {
  getCategories: PropTypes.func.isRequired,
  getPhotos: PropTypes.func.isRequired,
  galleryCategories: PropTypes.array.isRequired,
  galleryPhotos: PropTypes.array.isRequired,
  ligthBox: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  move: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
