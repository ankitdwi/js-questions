const sum =
  (...a) =>
  (...b) =>
    b && b.length > 0 ? sum(add([...a, ...b])) : add(a);

const add = (arr) => {
  return arr.reduce((acc, item) => acc + item);
};

console.log(sum(1, 2)(4, 5)(6)());

console.log(sum(1, 2)());
