import { MAIN } from '../consts';

const defaultSections = [
  {
    number: '',
    index: 0,
    type: 'intro',
    mainType: 'welcome',
    to: 'one',
    button: 'btn-circle',
    photo: '/img/3.jpg',
  },
  {
    number: 'one',
    index: 0,
    mainType: 'info',
    type: 'career',
    title: 'Some Text',
    content: 'text',
    to: 'four',
    button: 'btn-bottom',
    photo: '/img/2.jpg',
  },
];

let index = 0;

export const mainSections = (state = defaultSections, action) => {
  switch (action.type) {
    case MAIN.PHOTOS_SUCCESS:
      return state.map(section => {
        const photo = action.data[section.index];
        // action.data[Math.floor(Math.random() * (action.data.length - 0) + 0)];
        return {
          ...section,
          index: section.index === action.data.length ? 0 : section.index++,
          photo: photo.src,
        };
      });
    default:
      return state || [];
  }
};

export const mainPhotos = (state, action) => {
  switch (action.type) {
    case MAIN.PHOTOS_SUCCESS: {
      index = index === action.data.length - 1 ? 0 : index + 1;

      return action.data.map((item, i) => {
        if (index === i) {
          return { ...item, show: true };
        }
        return { ...item, show: false };
      });
    }
    default:
      return state || [];
  }
};

export const feedback = (state, action) => {
  switch (action.type) {
    case MAIN.SEND_FEEDBACK:
      return { ...state };
    case MAIN.SET_FEEDBACK_INFO:
      return { ...state, [action.data.id]: action.data.value };
    case MAIN.SEND_FEEDBACK_SUCCESS:
      alert('Ваше сообщение отправлено!');
      return state;
    default:
      return state || {};
  }
};
