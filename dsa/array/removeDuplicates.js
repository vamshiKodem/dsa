const arr = [3, 2, 5, 1, 5, 7, 7];

const removeDuplicates = (arr) => {
  const obj = {};
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      continue;
    } else {
      output.push(arr[i]);
      obj[arr[i]] = 1;
    }
  }
  return output;
};

console.log(removeDuplicates(arr));
