const entryRoot = {
  root: {
    component: {
      name: 'Splash',
    },
  },
};

const mainRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Home',
          },
        },
      ],
    },
  },
};

export { entryRoot, mainRoot };
