// 189. Rotate Array

const rotate = (nums, k) => {
  const swap = (i, j, nums) => {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
    return nums;
  };
  k = k % nums.length;
  swap(0, nums.length - 1, nums);
  swap(0, k - 1, nums);
  return swap(k, nums.length - 1, nums);
};

rotate(nums, k);
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
