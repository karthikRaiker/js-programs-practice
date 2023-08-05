function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  };
}

const hello = once((a, b) => console.log("hello world", a, b));

hello(1, 2);
hello(3, 4);
hello(5, 6);
