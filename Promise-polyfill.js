function myPromise(executor) {
  let onResolve;
  let onReject;
  this.then = function (thenHandler) {
    onResolve = thenHandler;
    return this;
  };
  this.catch = function (catchHandler) {
    onReject = catchHandler;
    return this;
  };

  function resolve(val) {}
  function reject(err) {}

  executor(resolve, reject);
}
