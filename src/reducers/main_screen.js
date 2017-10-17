
const defaultSections = [
  {
    number: 'one',
    type: 'intro',
    mainType: 'welcome',
    title: 'Some text',
    content: 'Another SomeText',
    to: 'two',
    photo: '/img/3.jpg',
  },
  {
    number: 'two',
    mainType: 'info',
    type: 'career',
    title: 'Some text',
    content: 'Another SomeText',
    to: 'three',
    photo: '/img/2.jpg',
  },
  {
    number: 'three',
    mainType: 'info',
    type: 'intro',
    title: 'Some text',
    content: 'Another SomeText',
    to: 'four',
    photo: '/img/1.jpg',
  },
];

export const mainSections = (state = defaultSections, action) => {
  switch (action.type) {
    default: return state || [];
  }
};

export const mainPhotos = (state, action) => {
  switch (action.type) {
    default: return state || [];
  }
};
