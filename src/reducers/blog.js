import { BLOG } from '../consts';

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
    width: 600,
    height: 200,
  },
  {
    id: 3,
    src: '/img/4.png',
    width: 600,
    height: 200,
  },
  {
    id: 4,
    src: '/img/5.jpg',
    width: 800,
    height: 400,
  },
];

export const article = (
  state = {
    id: 1,
    title: 'Title of News',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photos: arr,
  },
  action,
) => {
  switch (action.type) {
    case BLOG.SUCCESS:
      return state;
    default:
      return state || {};
  }
};

const newsArr = [
  {
    id: 1,
    title: 'Title of News',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo: {
      id: 0,
      src: '/img/1.jpg',
      width: 800,
      height: 400,
    },
  },
  {
    id: 2,
    title: 'Title of News',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo: {
      id: 2,
      src: '/img/3.jpg',
      width: 800,
      height: 400,
    },
  },
  {
    id: 3,
    title: 'Title of News',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo: {
      id: 1,
      src: '/img/2.jpg',
      width: 600,
      height: 400,
    },
  },
  {
    id: 4,
    title: 'Title of News',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo: {
      id: 4,
      src: '/img/5.jpg',
      width: 800,
      height: 400,
    },
  },
];

export const news = (state = newsArr, action) => {
  switch (action.type) {
    case BLOG.SUCCESS:
      return state;
    default:
      return state || [];
  }
};
