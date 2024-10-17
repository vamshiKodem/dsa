// 20. Valid Parentheses
const isValidParentheses = (str) => {
  const array = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
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

console.log(isValidParentheses("()[]{}"));
