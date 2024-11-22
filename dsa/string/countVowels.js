const countVowels = str => {
  let counter = 0;
  const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] in vowels) {
      counter++;
    }
  }
  return counter;
};

console.log(countVowels('hello'));
