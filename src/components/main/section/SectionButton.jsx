import React from 'react';

const SectionButton = ({ to, button }) => (
  <a href={`#${to}`} className={`${button} arrowScroll`}>
    <i className="arrow-down" />
  </a>
);

export default SectionButton;
