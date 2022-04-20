/**
 * Polyfill for array reduce method
 */

Object.defineProperty(Array.prototype, "reduce", {
  value: (cb, initalVal) => {
    if (this === null) {
      throw new TypeError("called with undefined");
    }

    if (typeof cb !== "function") {
      throw new TypeError(cb + " is not a function");
    }

    this.forEach((item) => {
      initalVal = initalVal !== undefined ? cb(initalVal, item) : item;
    });
  },
});

Array.prototype.reduce = (cb, initalVal) => {
  const values = this;

  values.forEach((item) => {
    initalVal = initalVal !== undefined ? cb(initalVal, item) : item;
  });
};
