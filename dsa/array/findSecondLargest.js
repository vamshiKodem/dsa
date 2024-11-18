const numbers = [20, 10, 3, 200, 59, 100];

const findSecondLargest = (numbers) => {
  let larger = -Infinity;
  let smaller = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (larger < numbers[i]) {
      smaller = larger;
      larger = numbers[i];
    } else if (smaller < numbers[i] && numbers[i] < larger) {
      smaller = numbers[i];
    }
  }
  return smaller;
};

console.log(findSecondLargest(numbers));
