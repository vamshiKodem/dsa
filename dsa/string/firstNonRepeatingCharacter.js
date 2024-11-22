const firstNonRepeatingCharacter = (str) => {
   const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
}

console.log(firstNonRepeatingChar('aabbccq'));
