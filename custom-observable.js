class Observable {
  constructor(functionThatTakesObserver) {
    this._functionThatTakesObserver = functionThatTakesObserver;
  }

  subscribe(observer) {
    return this._functionThatTakesObserver(observer);
  }
}

let myObservable = new Observable((observer) => {
  setTimeout(() => {
    observer.next("got data!");
    observer.complete();
  }, 1000);
});

let myObserver = {
  next(data) {
    console.log(data);
  },
  error(e) {
    console.log(e);
  },
  complete() {
    console.log("request complete");
  },
};

myObservable.subscribe(myObserver);
// (1 second) got data!
// (1 second) request complete
