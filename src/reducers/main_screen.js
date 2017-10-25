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

const arr = [
  {
    id: 0,
    src: '/img/1.jpg',
    caption: 'asfsasaf',
    width: 800,
    height: 400,
  },
  {
    id: 1,
    src: '/img/2.jpg',
    width: 600,
    height: 400,
  },
  {
    id: 2,
    src: '/img/3.jpg',
    width: 800,
    height: 400,
  },
  {
    id: 3,
    src: '/img/4.png',
    width: 800,
    height: 400,
  },
  {
    id: 4,
    src: '/img/5.jpg',
    width: 800,
    height: 400,
  },
];

export const mainSections = (state = defaultSections, action) => {
  switch (action.type) {
    case MAIN.PHOTOS_SUCCESS:
      console.log(action.data);
      return action.data;
    default:
      return state || [];
  }
};

export const mainPhotos = (state = arr, action) => {
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
