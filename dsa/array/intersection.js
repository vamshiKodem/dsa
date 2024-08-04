const intersection = (arr1, arr2) => {
  const obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]]) {
      obj[arr1[i]]++;
    } else {
      obj[arr1[i]] = 1;
    }
  }

  const output = [];
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      output.push(arr2[i]);
      obj[arr2[i]]--;
    }
  }
  return output;
};

console.log(intersection(["a", "b", "b", "b", "c"], ["a", "a", "b", "b", "b"]));
