import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { gallery } from '../../../actions';

const mapState = ({ mainPhotos }) => ({ photos: mainPhotos });

const mapDispatchToProps = dispatch => ({
  open: e => dispatch(gallery.open(e)),
  getPhotos: (category, page) => dispatch(gallery.pending(category, page)),
});

const Photos = ({ photos }) => (
  <section id="three" className="work">
    <div className="work-content">
      <h2 className="work-title">Мои работы.</h2>
      <div id="thumbnails" className="work-gallery">
        {photos.map(item => (
          <article key={item.id} className="work-gallery--itm">
            <Link to="/gallery" className="thumbnail">
              <img src={item.src} alt="" />
            </Link>
          </article>
        ))}
      </div>
      <Link to="/gallery">
        <p className="btn-form">Все работы</p>
      </Link>
    </div>
  </section>
);

export default connect(mapState, mapDispatchToProps)(Photos);
