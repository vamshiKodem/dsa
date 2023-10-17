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
