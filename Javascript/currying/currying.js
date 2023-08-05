// Currying in Javascript
// Example f(a,b) into f(a) (b)
function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}
console.log(f(5)(6));
