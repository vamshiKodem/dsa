const myLocalStorage = () => {
  const getItem = (key) => {
    const value = JSON.parse(localStorage.getItem(key));
    return value ? value : undefined;
  };

  const setItem = (key, value, expire) => {
    localStorage.setItem(key, JSON.stringify(value));

    setTimeout(() => {
      localStorage.removeItem(key);
    }, expire);
  };

  return {
    getItem,
    setItem,
  };
};

const { getItem, setItem } = myLocalStorage();

setItem("name", "vamshi", 2000);
setTimeout(() => {
  console.log(getItem("name"));
}, 1000);

setTimeout(() => {
  console.log(getItem("name"));
}, 1500);
setTimeout(() => {
  console.log(getItem("name"));
}, 2000);
