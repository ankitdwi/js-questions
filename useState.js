const React = (() => {
  let hooks = [];
  let idx = 0;

  function useState(initVal) {
    let state = () => hooks[idx] || initVal;
    let _idx = idx;
    let setState = (newVal) => {
      hooks[_idx] = newVal;
    };

    idx++;

    return [state, setState];
  }

  function useEffect(cb, depArray) {
    let hasChanged = true;

    //detect change
    if (hasChanged) cb();
  }

  function render(Com) {
    idx = 0;
    let C = Com();
    C.render();
    return C;
  }

  return { useState, render };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("React");

  React,
    useEffect(() => {
      effect;
      return () => {
        cleanup;
      };
    }, [input]);

  return {
    render: () => {
      console.log({ count, text });
    },
    click: () => {
      setCount(count + 1);
    },
    type: (word) => {
      setText(word);
    },
  };
}

var app = React.render(Component);
app.click();

var app = React.render(Component);
app.type("VUE");

var app = React.render(Component);
