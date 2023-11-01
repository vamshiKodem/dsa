const person = {
  firstname: "vamshi",
  lastname: "krishna",
};

function printName(city, country) {
  console.log(`${this.firstname} ${this.lastname} ${city} ${country}`);
}
// how call, apply, bind works
// printName.call(person, "hyd", "ind");
// const newFunc = printName.bind(person, "hyd");
// newFunc("ind");

Function.prototype.myCall = function (context, ...args) {
  context.functionRef = this;
  context.functionRef(...args);
};

// printName.myCall(person, "hyd", "ind");

Function.prototype.myApply = function (context, args) {
  context.functionRef = this;
  context.functionRef(args);
};

// printName.myApply(person, ["hyd", "ind"]);

Function.prototype.myBind = function (context, ...args) {
  context.functionRef = this;
  return function (...params) {
    console.log([...args, ...params]);
    context.functionRef(...args, ...params);
  };
};

const newFunc = printName.myBind(person, "hyd");
newFunc("ind");
