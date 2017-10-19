import React from 'react';
import PropTypes from 'prop-types';

import './Category.css';

const Category = ({ 
  pic,
  title,
  active,
}) => {
  return (
    <section>
      <div className="category-block">
        <p className="category-title" >{title}</p>
        <img src={pic} alt="" className={`${active && 'active'} category-img`} />
      </div>
    </section>
  );
};

Category.propTypes = {
  pic: PropTypes.string,
  title: PropTypes.string,
  active: PropTypes.bool,
};

export default Category;
