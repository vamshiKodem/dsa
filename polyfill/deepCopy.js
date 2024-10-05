const obj = {
  name: "vamshi",
  age: 24,
  address: {
    address: "hyd",
  },
  skills: ["react", "javascript", { tech: ["react native", "typescript"] }],
};

const getClone = (obj) => {
  const output = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      output[key] = getClone(obj[key]);
    } else if (typeof obj[key] === "object" && Array.isArray(obj[key])) {
      output[key] = obj[key].map((val) => val);
    } else {
      output[key] = obj[key];
    }
  }
  return output;
};
console.log(getClone(obj));
