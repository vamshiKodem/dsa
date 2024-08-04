const reverseString = (arr) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    [arr[leftPointer], arr[rightPointer]] = [
      arr[rightPointer],
      arr[leftPointer],
    ];
    leftPointer++;
    rightPointer--;
  }
  return arr;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
