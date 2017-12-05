import React from 'react';

import SectionButton from './SectionButton';

const Section = ({ mainSections }) =>
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
