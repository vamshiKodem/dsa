// 26. Remove Duplicates from Sorted Array

const removeDuplicates = (nums) => {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    nums[counter] = nums[i];
    counter++;
  }
  return counter;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 5, 5, 6]);
