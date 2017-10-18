import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapState = ({ mainPhotos }) => ({ photos: mainPhotos });

const Photos = ({ photos }) => (
  <section id="three" className="work">
    <div className="work-content">
      <h2 className="work-title">Мои работы.</h2>
      <div id="thumbnails" className="work-gallery">
        {
          photos.map(item => (
            <article key={item.id} className="work-gallery--itm">
              <a className="thumbnail" href="/galery">
                <img src={item.url} alt="" />
              </a>
              <h2>Diam tempus accumsan</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </article>
          ))
        }
      </div>
        <Link to="/galery"><p className="btn-form">Все работы</p></Link>
    </div>
  </section>
);

export default connect(mapState)(Photos);
