const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let s = 0;
  for (let i = 0; i < arr[i]; i++) {
    s += arr[i];
  }
  return s;
};

const multiply = function(arr) {
  let s = 1;
  for (let i = 0; i < arr[i]; i++) {
    s *= arr[i];
  }
  return s;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0) return 1;
  let f = 1;
  for (let i = a; i > 0; i--) {
    f *= i;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
