// 77. Combine

const combine = function (n, k) {
  const output = [];
  const subArray = [];

  const helper = (subArray, counter) => {
    if (subArray.length === k) output.push(subArray.slice());
    for (let i = counter; i < n; i++) {
      counter = i + 1;
      subArray.push(counter);
      helper(subArray, counter);
      subArray.pop();
    }
  };
  helper(subArray, 0);
  return output;
};

console.log(combine(4, 2));
