// 242. Valid Anagram

const isValidAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj = {};
  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = obj[str1[i]] ? obj[str1[i]] + 1 : 0;
    obj[str2[i]] = obj[str2[i]] ? obj[str2[i]] - 1 : 0;
  }

  for (let key in obj) {
    if (obj[key] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isValidAnagram("asfs", "assf"));
