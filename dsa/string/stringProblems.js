// This file contains mostly asked string dsa questions

// Reverse Words in a String III
const reverseWord = (word) => {
  const wordArray = word.split(" ");
  const newArray = [];

  for (let i = 0; i < wordArray.length; i++) {
    let currentWord = wordArray[i].split("");
    let leftPointer = 0;
    let rightPointer = currentWord.length - 1;

    while (leftPointer < rightPointer) {
      let tempNode = currentWord[leftPointer];
      currentWord[leftPointer] = currentWord[rightPointer];
      currentWord[rightPointer] = tempNode;
      leftPointer++;
      rightPointer--;
    }
    newArray.push(currentWord.join(""));
  }
  return newArray.join(" ");
};

// console.log(reverseWord("s'teL ekat edoCteeL tsetnoc"));

// 844. Backspace String Compare
const backspaceCompare = (s, t) => {
  const helper = (str) => {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "#") {
        newString = newString.slice(0, -1);
      } else {
        newString = newString + str[i];
      }
    }
    return newString;
  };
  return helper(s) === helper(t) ? true : false;
};
// console.log(backspaceCompare("ab#c", "ad#cas##"));

// 20. Valid Parentheses
const isValid = (str) => {
  const array = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") {
      array.push(")");
    } else if (str[i] === "{") {
      array.push("}");
    } else if (str[i] === "[") {
      array.push("]");
    } else if (array.pop() !== str[i]) {
      return false;
    }
  }
  return array.length ? false : true;
};

// console.log(isValid("()[]{}"));

// 242. Valid Anagram
const isValidAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s] = hash[s] ? hash[s] + 1 : 0;
    hash[t] = hash[t] ? hash[t] - 1 : 0;
  }
  for (let key in hash) {
    if (hash[key] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isValidAnagram("asfs", "assf"));
