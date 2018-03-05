import React from 'react';

import SectionButton from './SectionButton';

import './style.css';

const Section = ({ mainSections }) =>
  mainSections.map(section => (
    <section
      key={section.number}
      id={section.number}
      className={`${section.type}`}
    >
      <div
        className="slide-section"
        style={{ background: `transparent url(${section.photo})` }}
      />
      <div className={section.mainType}>
        {/* <h2 className={`${section.mainType}-title trans`}>{}</h2> */}
        {/* <p className={`${section.mainType}-content trans`}>{section.content}</p> */}
        {!section.number && (
          <SectionButton to={section.to} button={section.button} />
        )}
      </div>
      {section.number && (
        <SectionButton to={section.to} button={section.button} />
      )}
    </section>
  ));

export default Section;
