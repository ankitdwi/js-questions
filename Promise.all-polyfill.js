/**
 * Implementation of Promise.all in vaniall js
 */

var myPromiseAll = (promises) => {
  let result = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result[index] = res;
          count++;

          if (count === promise.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
