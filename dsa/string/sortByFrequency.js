// output based on the max repeating to least

const str = "helloworld";

const find = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  // {h: 1, e: 1, l: 3, o: 2, r: 1, w: 1}
  // we will do this if object have different keys but need to check the values for sorting
  const sortedArray = Object.keys(obj).sort((a, b) => {
    return obj[b] - obj[a];
  });

  return sortedArray.join("");
};

console.log(find(str)); // output lohewrd
