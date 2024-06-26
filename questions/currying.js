const currying = (a) => {
  return (b) => {
    return a + b;
  };
};

console.log(currying(5)(5));

const multiCurrying = (a) => {
  return (b) => {
    if (b) {
      return multiCurrying(a + b);
    }
    return a;
  };
};

console.log(multiCurrying(1)(1)(1)(10)());
