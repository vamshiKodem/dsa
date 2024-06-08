// 209. Minimum Size Subarray Sum
// sliding window

const minSubArrayLen = (nums, target) => {
  let left = 0;
  let minLength = Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    while (sum >= target) {
      minLength = Math.min(minLength, i - left + 1);
      sum = sum - nums[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
