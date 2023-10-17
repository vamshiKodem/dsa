// Polyfill for settimeout
function timeoutWrapper() {
  let id = 0;
  const timerHash = {};

  function mySetTimeout(cb, delay, ...args) {
    id++;
    timerHash[id] = true;
    const start = Date.now();
    function triggerCallback() {
      if (!timerHash[id]) return;
      if (Date.now() >= start + delay) {
        cb.apply(this, args);
      } else {
        requestIdleCallback(triggerCallback);
      }
    }
    triggerCallback(triggerCallback);
    return id;
  }

  function myClearTimeout(id) {
    delete timerHash[id];
  }

  return {
    myClearTimeout,
    mySetTimeout,
  };
}

const { myClearTimeout, mySetTimeout } = timeoutWrapper();

// const myId = mySetTimeout((...props) => {
//   console.log("My set time out", ...props);
// }, 1000);

//   myClearTimeout(myId);
