// This file contains polyfills which are most asked in interview

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Polyfill for map
Array.prototype.myMap = function (cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    const result = cb.call(this, this[i]);
    output.push(result);
  }
  return output;
};

// console.log(number.myMap((val) => val * 10));

// Polyfill for filter
Array.prototype.myFilter = function (cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    const isValid = cb.call(this, this[i]);
    if (isValid) {
      output.push(this[i]);
    }
  }
  return output;
};

// console.log(number.myFilter((val) => val >= 5));

// Polyfill for reduce
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (acc) {
      acc = cb.call(this, acc, this[i]);
    } else {
      acc = this[i];
    }
  }
  return acc;
};

// console.log(number.myReduce((acc, curr) => acc + curr, 0));

// console.log(number.reduce((acc, curr) => acc + curr, 0));

// Polyfill for settimeout
function timeoutWrapper() {
  let id = 0;
  const timerHash = {};

  function mySetTimeout(cb, delay, ...args) {
    id++;
    timerHash[id] = true;
    const start = Date.now();
    function triggerCallback() {
      if (!timerHash[id]) return;
      if (Date.now() >= start + delay) {
        cb.apply(this, args);
      } else {
        requestIdleCallback(triggerCallback);
      }
    }
    triggerCallback(triggerCallback);
    return id;
  }

  function myClearTimeout(id) {
    delete timerHash[id];
  }

  return {
    myClearTimeout,
    mySetTimeout,
  };
}

const { myClearTimeout, mySetTimeout } = timeoutWrapper();

// const myId = mySetTimeout((...props) => {
//   console.log("My set time out", ...props);
// }, 1000);

//   myClearTimeout(myId);

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

const myPromise = new MyPromise((resolve, reject) => {
  resolve(1000);
});

myPromise.then((value) => console.log(value)).catch((err) => console.log(err));
