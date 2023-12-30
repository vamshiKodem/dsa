// 169. Majority Element

const majorityElement = (nums) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }
  for (let key in hash) {
    if (hash[key] > nums.length / 2) return key;
  }
};

majorityElement([2, 2, 1, 1, 1, 2, 2]);
