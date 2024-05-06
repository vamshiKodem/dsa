// Here i have implemented the memoization wrapper to cache the output and
// return the value from cache if function is called multiple times with same parameters

const addNumber = (a, b) => {
  return a + b;
};

const memoizationWrapper = () => {
  const cache = new Map();
  const memoization = (callback) => {
    return (...args) => {
      const stringifyArgs = args.toString();
      if (cache.has(stringifyArgs)) {
        return cache.get(stringifyArgs);
      } else {
        const result = callback(...args);
        cache.set(stringifyArgs, result);
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
