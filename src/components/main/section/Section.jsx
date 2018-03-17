import React from 'react';

import SectionButton from './SectionButton';

import './style.css';

const Section = ({ mainSections, photos }) =>
  mainSections.map(section => (
    <section
      key={section.number}
      id={section.number}
      className={`${section.type}`}
    >
      {photos.map(photo => (
        <div
          key={photo.id}
          className={photo.show ? 'slide-section' : ''}
          style={{
            display: photo.show ? 'block' : 'none',
            background: `transparent url('http://ezhukov.ru${photo.src}')`,
          }}
        />
      ))}
      <div className={section.mainType}>
        <h2 className={`${section.mainType}-title`}>{section.title || ''}</h2>
        <p className={`${section.mainType}-content trans`}>
          {section.content || ''}
        </p>
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
