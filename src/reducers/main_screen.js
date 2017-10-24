const defaultSections = [
  {
    number: "",
    type: "intro",
    mainType: "welcome",
    title: "Some text",
    content: "Another SomeText",
    to: "one",
    button: "btn-circle",
    photo: "/img/3.jpg"
  },
  {
    number: "one",
    mainType: "info",
    type: "career",
    title: "Some text",
    content: "Another SomeText",
    to: "two",
    button: "btn-bottom",
    photo: "/img/2.jpg"
  },
  {
    number: "two",
    mainType: "info",
    type: "aboutMe",
    title: "Some text",
    content: "Another SomeText",
    to: "three",
    button: "btn-bottom",
    photo: "/img/1.jpg"
  }
];

export const mainSections = (state = defaultSections, action) => {
  switch (action.type) {
    default:
      return state || [];
  }
};

export const mainPhotos = (state, action) => {
  switch (action.type) {
    default:
      return state || [];
  }
};
