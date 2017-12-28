import { MAIN } from '../consts';

const defaultSections = [
  {
    number: '',
    type: 'intro',
    mainType: 'welcome',
    title: 'Some text',
    content: 'Another SomeText',
    to: 'one',
    button: 'btn-circle',
    photo: '/img/3.jpg',
  },
  {
    number: 'one',
    mainType: 'info',
    type: 'career',
    title: 'Some text',
    content: 'Another SomeText',
    to: 'two',
    button: 'btn-bottom',
    photo: '/img/2.jpg',
  },
  {
    number: 'two',
    mainType: 'info',
    type: 'aboutMe',
    title: 'Some text',
    content: 'Another SomeText',
    to: 'three',
    button: 'btn-bottom',
    photo: '/img/1.jpg',
  },
];

export const mainSections = (state = defaultSections, action) => {
  switch (action.type) {
    case MAIN.PHOTOS_SUCCESS:
      return state.map(section => {
        const newSection = section;
        newSection.photo =
          action.data[
            Math.floor(Math.random() * (action.data.length - 0) + 0)
          ].src;

        return newSection;
      });
    default:
      return state || [];
  }
};

export const mainPhotos = (state, action) => {
  switch (action.type) {
    case MAIN.PHOTOS_SUCCESS:
      return action.data;
    default:
      return state || [];
  }
};

export const feedback = (state, action) => {
  switch (action.type) {
    case MAIN.SET_FEEDBACK_INFO:
      return { ...state, [action.data.id]: action.data.value };
    case MAIN.SEND_FEEDBACK_SUCCESS:
      return state;
    default:
      return state || {};
  }
};
