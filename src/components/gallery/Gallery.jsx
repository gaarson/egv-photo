import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Photos from 'react-photo-gallery';
import LightBox from 'react-images';

import Category from './categories/Category';
import Actions from '../../actions';

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
  move: e => dispatch(Actions.gallery.move(e)),
  open: e => dispatch(Actions.gallery.open(e.target)),
  close: () => dispatch(Actions.gallery.close()),
  change: (id) => {
    dispatch(Actions.gallery.changeCategory(id));
    dispatch(Actions.gallery.pending(id));
  },
});

const Gallery = ({ 
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
  galleryCategories: PropTypes.array,
  galleryPhotos: PropTypes.array,
  ligthBox: PropTypes.object,
  change: PropTypes.func,
  close: PropTypes.func,
  move: PropTypes.func,
  open: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
