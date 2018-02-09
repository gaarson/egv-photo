import React from "react";

const SectionButton = ({ to, button }) => (
  <a href={`#${to}`} className={button}>
    <i className="arrow-down" />
  </a>
);

export default SectionButton;
