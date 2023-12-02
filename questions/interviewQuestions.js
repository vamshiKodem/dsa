const data = {
  a: {
    a: "a",
    b: 1,
  },
  b: {
    b: 1,
  },
  c: {
    c: {
      e: "e",
      b: {
        c: "c",
        a: 1,
        z: [1, 1, 1, { r: 100 }],
      },
    },
  },
};

// find the sum of the values in object
let sum = 0;
const sumCalculate = (data) => {
  if (typeof data === "number") {
    sum = sum + data;
  } else if (typeof data === "object") {
    for (let key in data) {
      const current = data[key];
      if (current && typeof current === "object") {
        if (Array.isArray(current)) {
          for (let i = 0; i < current.length; i++) {
            sumCalculate(current[i]);
          }
        } else {
          sumCalculate(current);
        }
      } else if (typeof current === "number") {
        sum = sum + current;
      }
    }
  }

  return sum;
};

console.log(sumCalculate(data));
