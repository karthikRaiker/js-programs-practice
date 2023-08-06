// Currying in Javascript
/* Question 2 -
evaluate("sum") (4) (2) => 6
evaluate("multiply") (4) (2) => 8
evaluate("divide") (4) (2) => 2
evaluate("substract") (4) (2) => 2
*/

function evaluateCurrying(operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case "ADD":
          return a + b;
        case "SUB":
          return a - b;
        case "MUL":
          return a * b;
        case "DIV":
          return a / b;
        default:
          return `${a} ${b}`;
      }
    };
  };
}

// const evaluateAdd = evaluateCurrying("ADD");
// console.log(evaluateAdd(10)(20));

console.log(evaluateCurrying("ADD")(10)(20));
console.log(evaluateCurrying("MUL")(10)(20));
console.log(evaluateCurrying("DIV")(10)(20));
console.log(evaluateCurrying("SUB")(10)(20));

const mul = evaluateCurrying("MUL");
console.log(mul(10)(90));
console.log(mul(30)(70));
console.log(mul(30)(60));
