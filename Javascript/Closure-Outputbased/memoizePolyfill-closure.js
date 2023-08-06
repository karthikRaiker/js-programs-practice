function memoizeProduct(func, context) {
  let res = {};
  return function (...args) {
    let argsCache = JSON.stringify(...args);
    if (!res[argsCache]) {
      res[argsCache] = func.call(context || this, ...args);
    }
    console.log`${res}`;
    return res[argsCache];
  };
}

const clumsySquare = (m, n) => {
  for (let i = 0; i < 10000000; i++) {}
  return m * n;
};

//calling clumsySquare
console.time("clumsySquare");
console.log(clumsySquare(10, 20));
console.timeEnd("clumsySquare");
console.time("clumsySquare");
console.log(clumsySquare(10, 20));
console.timeEnd("clumsySquare");

//*******************************************memoization***********************/
//memoizing clumsySquare
const memoizeClumsyProduct = memoizeProduct(clumsySquare);

//memoized way
console.time("memoizeClumsyProduct");
console.log(memoizeClumsyProduct(33, 66));
console.timeEnd("memoizeClumsyProduct");
console.time("memoizeClumsyProduct");
console.log(memoizeClumsyProduct(33, 66));
console.timeEnd("memoizeClumsyProduct");
