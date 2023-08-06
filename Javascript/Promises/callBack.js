//callbacks

console.log("star");

const someAction = (message, cb) => {
  setTimeout(() => {
    cb(`hello ${message}`);
  }, 1000);
};

const someOtherAction = (message, cb) => {
  setTimeout(() => {
    cb(`nested Callback: ${message}`);
  }, 2000);
};

const callbackHellAction = (callbackhellmessage, cb) => {
  setTimeout(() => {
    cb(`callbackhellmessage: ${callbackhellmessage}`);
  }, 3000);
};

const myMessage = someAction("welcome to callback async world", (message) => {
  console.log(message);
  someOtherAction("example of nested callback", (res) => {
    console.log(res);
    callbackHellAction(
      "This is 3rd nested callback(callback hell)",
      (callBackHellres) => console.log(callBackHellres)
    );
  });
});

console.log(myMessage);

console.log("Finish");
