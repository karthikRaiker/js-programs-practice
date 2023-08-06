// Closures in Javascript
// Ques 6: What is Module Pattern?
var Module = (function () {
  function privateMethod() {
    // do something
    console.log("privateMethod called from public method");
  }
  return {
    publicMethod: function () {
      console.log("public");
      privateMethod();
    },
  };
})();
Module.publicMethod();
// Module.privateMethod();

//you can only access publicMethod
//you cant access privateMethod cause module function wont return privateMethod
//privateMethod you can think it as helper function.
