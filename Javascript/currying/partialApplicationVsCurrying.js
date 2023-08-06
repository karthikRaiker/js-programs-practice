// Currying in Javascript
// Question 4 Currying vs Partial Application
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}
const x = sum(10);
// console.log(x(5, 6));
// console.log(x(3, 2));
// // or
// console.log(sum(20)(1, 4));

const multiply = (num1, num2) => num1 * num2;
const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const divide = (num1, num2) => num1 / num2;
const findMax = (num1, num2) => Math.max(num1, num2);

const operationClosure = (func) => {
  return (a, b) => {
    return func(a, b);
  };
};

const product = operationClosure(multiply);
const adding = operationClosure(add);
const substraction = operationClosure(substract);
const division = operationClosure(divide);
const max = operationClosure(findMax);
console.log(`product is: ${product(10, 20)}`);
console.log(`addtion is: ${adding(10, 20)}`);
console.log(`substraction is: ${substraction(10, 20)}`);
console.log(`division is: ${division(10, 20)}`);
console.log(`max is: ${max(10, 20)}`);
