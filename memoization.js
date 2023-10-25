const addNumber = (a, b) => {
  return a + b;
};

const memoizationWrapper = () => {
  const cache = {};
  const memoization = (callback) => {
    return (...args) => {
      const stringifyArgs = args.toString();
      if (stringifyArgs in cache) {
        console.log("cached value");
        return cache[stringifyArgs];
      } else {
        console.log("function call value");
        const result = callback(...args);
        cache[stringifyArgs] = result;
        return result;
      }
    };
  };

  return {
    memoization,
  };
};

const { memoization } = memoizationWrapper();

memoization(addNumber)(1, 2);
memoization(addNumber)(1, 2);
memoization(addNumber)(1, 2);
