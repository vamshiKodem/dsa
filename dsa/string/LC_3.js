// 3. Longest Substring Without Repeating Characters (M)
// using sliding window

const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let maxLength = 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    while (map.has(s[i])) {
      map.delete(s[left]);
      left++;
    }
    map.set(s[i], 1);
    maxLength = Math.max(maxLength, map.size);
  }
  return maxLength;
};

lengthOfLongestSubstring("abccbcbb");
