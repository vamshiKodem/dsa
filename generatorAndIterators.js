function* sampleGenerator() {
  let id = 0;
  while (true) {
    yield id;
    id++;
  }
}

const generator = sampleGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

const sampleIterator = (values) => {
  let id = 0;
  return {
    next: () => {
      if (id < values.length) {
        return {
          value: values[id++],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
};

const fruits = ["apple", "orange", "grapes", "mango"];
const iterator = sampleIterator(fruits);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
