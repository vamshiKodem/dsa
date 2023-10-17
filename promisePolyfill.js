// Polyfill for Promise.resolve
const promiseResolve = (value) => {
  return new Promise((resolve) => resolve(value));
};

// Polyfill for Promise.reject
const promiseReject = (value) => {
  return new Promise((_resolve, reject) => reject(value));
};

// Polyfill for Promise.all

const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const output = [];
    promises.forEach((promise, index) => {
      promise
        .then((data) => {
          output.push(data);
          if (promises.length - 1 === index) {
            resolve(output);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

promiseAll([
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.reject("not working"),
])
  .then((data) => {
    console.log(data);
  })
  .catch((data) => console.log(data));

// Polyfill for Promise with out async
class MyPromise {
  isResolved = false;
  resolvedData;

  isRejected = false;
  rejectedData;

  constructor(executor) {
    const resolve = (value) => {
      this.isResolved = true;
      this.resolvedData = value;
    };

    const reject = (value) => {
      this.isRejected = true;
      this.rejectedData = value;
    };

    executor(resolve, reject);
  }

  then(cb) {
    if (this.isResolved) {
      cb(this.resolvedData);
    }
    return this;
  }

  catch(cb) {
    if (this.isRejected) {
      cb(this.rejectedData);
    }
    return this;
  }
}

// Polyfill for Promise with async and without chaining
class MyPromiseWithOutChaining {
  isResolved = false;
  resolvedData;
  resolvedCb;

  isRejected = false;
  rejectedData;
  rejectedCb;

  constructor(executor) {
    const resolve = (value) => {
      this.isResolved = true;
      this.resolvedData = value;
      if (typeof this.resolvedCb === "function") {
        this.resolvedCb(this.resolvedData);
      }
    };

    const reject = (value) => {
      this.isRejected = true;
      this.rejectedData = value;
      if (typeof this.rejectedCb === "function") {
        this.rejectedCb(this.rejectedData);
      }
    };

    executor(resolve, reject);
  }

  then(cb) {
    this.resolvedCb = cb;
    if (this.isResolved) {
      this.resolvedCb(this.resolvedData);
    }
    return this;
  }

  catch(cb) {
    this.rejectedCb = cb;
    if (this.isRejected) {
      this.rejectedCb(this.rejectedData);
    }
    return this;
  }
}

const myPromise = new MyPromiseWithOutChaining((resolve, reject) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
});

myPromise.then((value) => console.log(value)).catch((err) => console.log(err));
