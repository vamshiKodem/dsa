const str = 'helloworld';

const find = str => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  const sortedArray = Object.keys(obj).sort((a, b) => {
    return obj[b] - obj[a];
  });
  let ouput = '';
  for (let i = 0; i < sortedArray.length; i++) {
    ouput = ouput + sortedArray[i];
  }
  return ouput;
};

console.log(find(str));

