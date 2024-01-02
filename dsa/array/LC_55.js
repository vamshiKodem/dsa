// 55. Jump Game

const canJump = (nums) => {
  let step = nums[0];
  for (let i = 1; i < nums.length; i++) {
    step--;
    if (step < 0) {
      return false;
    } else if (nums[i] > step) {
      step = nums[i];
    }
  }
  return true;
};

canJump([2, 3, 1, 1, 4]);
