const factorial = (num) => {
  let output = 1;
  while (num > 0) {
    output = output * num;
    num--;
  }
  return output;
};

console.log(factorial(5));
