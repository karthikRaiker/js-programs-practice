// Closures in Javascript
// Ques 5: How would you use a closure to create a private counter?

const counter = () => {
  let _counter = 0;

  const add = (increment) => {
    _counter += increment;
  };

  const retrive = () => {
    return `current count value is: ${_counter}`;
  };

  return {
    add,
    retrive,
  };
};

const c = counter();
c.add(3);
c.add(9);
c.add(18);
console.log(c.retrive());
