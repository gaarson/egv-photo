import { MAIN } from '../consts';

const defaultSections = [
  {
    number: '',
    type: 'intro',
    mainType: 'welcome',
    to: 'one',
    button: 'btn-circle',
    photo: '/img/3.jpg',
  },
  {
    number: 'one',
    mainType: 'info',
    type: 'career',
    title: 'Запечатлите мнгновение.',
    content:
      'Я фотографирую для того, чтобы сохранить в памяти настоящие моменты жизни, чувства и эмоции, поэтому я не люблю стеклянные, пустые глаза, которые смотрят бездушно в кадр.',
    to: 'four',
    button: 'btn-bottom',
    photo: '/img/2.jpg',
  },
];

export const mainSections = (state = defaultSections, action) => {
  switch (action.type) {
    case MAIN.PHOTOS_SUCCESS:
      return state.map(section => {
        const photo =
          action.data[Math.floor(Math.random() * (action.data.length - 0) + 0)];
        return { ...section, photo: photo.src };
      });
    default:
      return state || [];
  }
};

export const mainPhotos = (state, action) => {
  switch (action.type) {
    case MAIN.PHOTOS_SUCCESS: {
      const index = Math.floor(Math.random() * (action.data.length - 0) + 0);

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
