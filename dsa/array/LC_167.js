// 167. Two Sum II - Input Array Is Sorted

const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
};

twoSum([2, 7, 11, 15], 7);
