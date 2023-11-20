// Implementation of debouncing using setTimeout

const textInput = document.querySelector(".text-input");

function debouncing(cb, delay) {
  const context = this;
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb.apply(context, args);
    }, delay);
  };
}

function callback() {
  console.log("I am callback function");
}

textInput.addEventListener("keyup", debouncing(callback, 500));
