import React from 'react';

import './Article.css';

const Article = () => (
  <section className="article">
    <p className="article__title">title</p>
    <p className="article__description">
      blablablablablablablablablablablablablablablablablablablablablablablablablablabla
    </p>
    <div className="article__photo-block">
      <img src="/img/1.jpg" alt="" width="200px" height="160px" />
      <img src="/img/1.jpg" alt="" width="200px" height="160px" />
      <img src="/img/1.jpg" alt="" width="200px" height="160px" />
      <img src="/img/1.jpg" alt="" width="200px" height="160px" />
      <img src="/img/1.jpg" alt="" width="200px" height="160px" />
    </div>
  </section>
);

export default Article;
