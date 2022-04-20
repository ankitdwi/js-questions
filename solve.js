const obj = [
  {
    id: 1,
    name: "Mahesh",
    children: [
      {
        id: 2,
        name: "suresh",
        children: [
          {
            id: 3,
            name: "Meena",
          },
        ],
      },
      {
        id: 4,
        name: "Neelesh",
      },
    ],
  },
  {
    id: 5,
    name: "Kalpesh",
  },
];

function parseTree(obj, txt = "esh", validPath) {
  const result = [];
  for (let i = 0; i < obj.length; i++) {
    if (hasName(obj[i], txt, result)) {
      console.log();
    }
  }
}

const hasName = (data, txt, result) => {
  if (data.name.includes(txt) && data.children) {
    //push into result and travese children
    return parseTree(data.children, txt, result);
  } else if (data.name.includes(txt) && !data.children) {
    //push into result and return true
    return true;
  } else if (!data.name.includes(txt) && data.children) {
    //push into result and return true
    return parseTree(data.children, txt, result);
  } else {
    return false;
  }
};
