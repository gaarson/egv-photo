import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Photos from 'react-photo-gallery';
import LightBox from 'react-images';

import Category from './categories/Category';
import { gallery } from '../../actions';

import './Gallery.css';

const mapStateToProps = (
  { galleryPhotos, galleryCategories, ligthBox },
  { match },
) => ({
  galleryPhotos,
  galleryCategories,
  ligthBox,
  category: match.params.category,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(gallery.categoriesPending()),
  getPhotos: (category, page) => dispatch(gallery.pending(category, page)),
  move: e => dispatch(gallery.move(e)),
  open: e => dispatch(gallery.open(e)),
  close: () => dispatch(gallery.close()),
});

class Gallery extends React.Component {
  componentDidMount() {
    this.props.getPhotos(this.props.category, 0);
    this.props.getCategories();
  }

  componentWillUpdate(next) {
    if (next.category !== this.props.category)
      this.props.getPhotos(next.category, 0);
  }

  render() {
    const {
      galleryPhotos,
      galleryCategories,
      ligthBox,
      close,
      move,
      open,
      category,
    } = this.props;
    return (
      <div className="gallery-block">
        <div className="gallery-category">
          {galleryCategories.map(
            cat =>
              cat.id === +category && (
                <Category key={cat.id} title={cat.title} pic={cat.src} />
              ),
          )}
        </div>
        <Photos photos={galleryPhotos} onClick={(event, obj) => open(obj)} />
        <LightBox
          isOpen={ligthBox.open}
          images={ligthBox.images}
          currentImage={ligthBox.currentImage}
          onClickPrev={() => move(-1)}
          onClickNext={() => move(1)}
          onClickImage={() => move(1)}
          onClose={close}
        />
        {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p className="btn-form">Загрузить еще</p>
        </div> */}
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
  close: PropTypes.func.isRequired,
  move: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
