import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Photos from 'react-photo-gallery';
import LightBox from 'react-images';

import Category from './categories/Category';
import { gallery } from '../../actions';

import './Gallery.css';

const mapStateToProps = ({ galleryPhotos, galleryCategories, ligthBox }) => ({
  galleryPhotos,
  galleryCategories,
  ligthBox,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(gallery.categoriesPending()),
  getPhotos: (category, page) => dispatch(gallery.pending(category, page)),
  move: e => dispatch(gallery.move(e)),
  open: e => dispatch(gallery.open(e.target)),
  close: () => dispatch(gallery.close()),
  change: id => {
    dispatch(gallery.changeCategory(id));
    dispatch(gallery.pending(id));
  },
});

class Gallery extends React.Component {
  componentDidMount() {
    this.props.getPhotos(1, 0);
    this.props.getCategories();
  }

  render() {
    const {
      galleryPhotos,
      galleryCategories,
      ligthBox,
      change,
      close,
      move,
      open,
    } = this.props;
    return (
      <div className="gallery-block">
        <div className="gallery-category">
          {galleryCategories.map(cat => (
            <Category
              key={cat.id}
              title={cat.title}
              change={() => change(cat.id)}
              pic={cat.pic}
              active={cat.active}
            />
          ))}
        </div>
        <Photos photos={galleryPhotos} onClick={open} />
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
  }
}

Gallery.propTypes = {
  getCategories: PropTypes.func.isRequired,
  getPhotos: PropTypes.func.isRequired,
  galleryCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  galleryPhotos: PropTypes.arrayOf(PropTypes.object).isRequired,
  ligthBox: PropTypes.objectOf(PropTypes.any).isRequired,
  change: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  move: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
