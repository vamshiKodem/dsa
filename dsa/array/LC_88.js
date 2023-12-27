// 88. Merge Sorted Array

const merge = (nums1, m, nums2, n) => {
  while (n) {
    // here we compare nums1(without zero's) and nums2 last value
    if (nums1[m - 1] > nums2[n - 1]) {
      // if nums1 is greater than nums2 and assign that to last character of nums1 (including zero's)
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
  return nums1;
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
