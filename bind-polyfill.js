/**
 * polfill for bind function
 * defined property adds if not present or replaces if present
 */

Object.defineProperty(Function.prototype, "bind", {
  value: (cb) => {
    return (...args) => {
      params = args.slice(1);

      return (...args2) => {
        this.apply(args[0], [...params, ...args2]);
      };
    };
  },
});

/**
 * polfill for bind function
 * Simpler version
 * usage -> bind(thisArg, arg1, ... , argN)
 */
Function.prototype.mybind = function (...args) {
  let params = args.slice(1);

  return (...args2) => {
    this.apply(args[0], [...params, ...args2]);
  };
};
