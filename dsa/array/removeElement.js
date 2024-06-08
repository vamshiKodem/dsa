// 27. Remove Element

const removeElement = (nums, val) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

removeElement([3, 2, 2, 3], 3);
