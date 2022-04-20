/**
 * https://www.youtube.com/watch?v=FR5TO6sro58
 */
const PENDING = 0;
const FULLFILLED = 1;
const REJECTED = 2;

function myPromise(executro) {
  let state = PENDING;
  let value = null;

  let handlers = [];
  let catchers = [];

  function resolve(result) {
    if (state !== PENDING) return;

    state = FULLFILLED;
    value = result;

    handlers.forEach((h) => {
      h(value);
    });
  }

  executro(resolve, reject);

  function reject(e) {
    if (state !== PENDING) return;

    state = REJECTED;
    value = e;

    catchers.forEach((c) => c(value));
  }

  this.then = (sucessCb) => {
    if (state === FULLFILLED) {
      sucessCb(value);
    } else {
      handlers.push(sucessCb);
    }

    return this;
  };

  this.catch = (failureCb) => {
    if (state === REJECTED) {
      failureCb(value);
    } else {
      catchers.push(failureCb);
    }
  };
}

const api = new myPromise((resolve, reject) => {
  if (2 == 2) {
    setTimeout(() => resolve("Resolve called"));
  } else {
    setTimeout(() => reject("Promise rejectd"), 1000);
  }
});

api
  .then((value) => {
    console.log(value);
    console.log("then Value");
  })
  .catch((error) => {
    console.log("catch", error);
  });
