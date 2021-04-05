const entryRoot = {
  root: {
    component: {
      name: "Splash",
    },
  },
};

const mainRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: "Search",
          },
        },
      ],
    },
  },
};

export { entryRoot, mainRoot };
