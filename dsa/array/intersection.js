const intersection = (arr1, arr2) => {
  const obj = new Map();
  for (let i = 0; i < arr1.length; i++) {
    if (obj.has(arr1[i])) {
      obj.set(arr1[i], obj.get(arr1[i]) + 1);
    } else {
      obj.set(arr1[i], 1);
    }
  }

  const output = [];
  for (let i = 0; i < arr2.length; i++) {
    console.log(obj);
    if (obj.has(arr2[i]) && obj.get(arr2[i]) > 0) {
      output.push(arr2[i]);
      obj.set(arr2[i], obj.get(arr2[i]) - 1);
    }
  }
  return output;
};

console.log(intersection(["a", "b", "b", "b", "c"], ["a", "a", "b", "b", "b"])); // ["a", "b", "b", "b"];
console.log(intersection([1, 1, 2, 2, 2, 3, 4], [1, 1, 2, 3])); //  [1, 1, 2, 3]
console.log(intersection([1, 2, 2, 3, 4, 4], [2, 2, 4, 5, 5, 2000])); // [2, 2, 4]
