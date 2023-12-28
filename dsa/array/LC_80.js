// 80. Remove Duplicates from Sorted Array II

const removeDuplicates = (nums) => {
  let len = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 1 && nums[i] !== nums[i + 1]) {
      nums[len] = nums[i];
      len++;
      counter = 0;
    } else {
      if (counter >= 1) {
        continue;
      } else {
        nums[len] = nums[i];
        len++;
        counter++;
      }
    }
  }
  return len;
};

removeDuplicates([1, 1, 1, 2, 2, 3]);
