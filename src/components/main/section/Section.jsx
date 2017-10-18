import React from 'react';
import { connect } from 'react-redux';

const mapState = ({ mainSections }) => ({ mainSections });

const Section = ({ mainSections }) => (
  mainSections.map(section => (
    <section
      key={section.number}
      id={section.number}
      className={section.type}
      style={{ background: `url(${section.photo})` }}
    >
      <div className={section.mainType}>
        <h2 className={`${section.mainType}-title`}>{section.title}</h2>
        <p className={`${section.mainType}-content`}>{section.content}</p>
        <a href={`#${section.to}`} className="btn-circle"><i className="arrow-down" /></a>
      </div>
    </section>
  ))
);

export default connect(mapState)(Section);
