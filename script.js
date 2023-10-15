// -------------- This is section for array solution-------------

const squareArray = (arr) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let newArray = new Array(arr.length).fill(0);
  // here we are creating new array with same length of arg arr
  // and making all values as zero

  for (let i = arr.length - 1; i >= 0; i--) {
    // here we are looping from end to start

    const leftSquared = Math.pow(arr[leftPointer], 2);
    // here we make them square
    const rightSquared = Math.pow(arr[rightPointer], 2);
    if (leftSquared > rightSquared) {
      // if left square value is greater then we assign left squared value to current index
      newArray[i] = leftSquared;
      leftPointer++;
    } else {
      // if right square value is greater then we assign right squared value to current index
      newArray[i] = rightSquared;
      rightPointer--;
    }
  }
  return newArray;
};

console.log(squareArray([-5, -4, 2, 3, 4]));

const isMonotonic = (arr) => {
  const firstValue = arr[0];
  const lastValue = arr[arr.length - 1];

  if (firstValue < lastValue) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) return false;
    }
  } else if (firstValue > lastValue) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) return false;
    }
  } else if (firstValue === lastValue) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== arr[i + 1]) return false;
    }
  }
  return true;
};

// console.log(isMonotonic([1, 2, 3, 4, 4]));
// console.log(isMonotonic([5, 3, 3, 2, 1, 1, 1]));
// console.log(isMonotonic([1, 1, 1, 1]));
// console.log(isMonotonic([1, 1, 1, 0, 2])); // False

const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    end--;
  }
  return arr;
};

/**
 *
 * @param {number[]} arr
 * @param {number} k
 */
const rotate = (arr, k) => {
  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
};

// console.log(rotate([1, 2, 3, 4, 5, 6], 2));

// 1572. Matrix Diagonal Sum
const diagonalSum = (mat) => {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (i === j || i + j === mat[0].length - 1) {
        sum = sum + mat[i][j];
      }
    }
  }
  return sum;
};

//   console.log(
//     diagonalSum([
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ])
//   );

// 1732. Find the Highest Altitude
const largestAltitude = (gain) => {
  let alt = 0;
  let maxAlt = 0;
  for (let i = 0; i < gain.length; i++) {
    alt = alt + gain[i];
    if (alt > maxAlt) maxAlt = alt;
  }
  return maxAlt;
};

// 53. Maximum Subarray
const maxSubArray = (nums) => {
  let max = -Infinity;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp = Math.max(nums[i], nums[i] + temp);
    max = Math.max(temp, max);
  }
  return max;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));