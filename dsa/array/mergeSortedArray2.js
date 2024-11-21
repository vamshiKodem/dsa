const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];

const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const output = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    output.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    output.push(arr2[j]);
    j++;
  }

  return output;
};

console.log(merge(array1, array2));
