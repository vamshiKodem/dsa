const data = {
  a: {
    a: "a",
    b: 1,
  },
  b: {
    b: 1,
  },
  c: {
    c: {
      e: "e",
      b: {
        c: "c",
        a: 1,
        z: [1, 1, 1, { r: 100 }],
      },
    },
  },
};

// find the sum of the values in object
let sum = 0;
const sumCalculate = (data) => {
  if (typeof data === "number") {
    sum = sum + data;
  } else if (typeof data === "object") {
    for (let key in data) {
      const current = data[key];
      if (current && typeof current === "object") {
        if (Array.isArray(current)) {
          for (let i = 0; i < current.length; i++) {
            sumCalculate(current[i]);
          }
        } else {
          sumCalculate(current);
        }
      } else if (typeof current === "number") {
        sum = sum + current;
      }
    }
  }

  return sum;
};

console.log(sumCalculate(data));


const arr = [
  "He said he was not there yesterday; however, many people saw him there.",
  "The small white buoys marked the location of hundreds of crab pots.",
  "My uncle's favourite pastime was building cars out of noodles.",
  "The beauty of the African sunset disguised the danger lurking nearby.",
  "There aren't enough towels in the world to stop the sewage flowing from his mouth.",
  "He swore he just saw his sushi move.",
  "The light that burns twice as bright burns half as long.",
  "Potato wedges probably are not best for relationships.",
  "When he asked her favourite number, she answered without hesitation that it was diamonds.",
  "When he had to picnic on the beach, he purposely put sand in other people food.",
];

const pick = (arr) => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    const arrStr = arr[i].split(" ");
    for (let j = 0; j < arrStr.length; j++) {
      if (hash[arrStr[i]]) {
        hash[arrStr[i]]++;
      } else {
        hash[arrStr[i]] = 1;
      }
    }
  }

  const topFive = [];
  let word = [];
  for (key in hash) {
    word.push({ word: key, times: hash[key] });
  }
  word = word.sort((a, b) => b.times - a.times);
  word.forEach((val, i) => {
    if (i <= 4) {
      topFive.push(val);
    }
  });
  return topFive;
};

console.log(pick(arr));
