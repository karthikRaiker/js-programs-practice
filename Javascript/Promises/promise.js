// console.log("start");

// const subscribe = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isSubscribe = true;
//     isSubscribe
//       ? resolve("Thanks for subscribing my channel")
//       : reject(new Error("why aren't you subscribed my channel"));
//   }, 100);
// });

// console.log(subscribe);
// subscribe.then((res) => console.log(res)).catch((err) => console.log(err));

// console.log("Stop");

//********************************************************************************** */

const someActionPromise = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hello ${message}`);
      reject(new Error("promise isn't fulfilled"));
    }, 1000);
  });
};

const someOtherActionPromise = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`nested promise: ${message}`);
      reject(new Error("nested promise isn't fulfilled"));
    }, 2000);
  });
};

const promiseHellAction = (callbackhellmessage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`promise hell message: ${callbackhellmessage}`);
      reject(new Error("promise hell promise isn't fulfilled"));
    }, 3000);
  });
};

// console.log("nested Promise start");

// someActionPromise("welcome to Promise async world")
//   .then((res) => {
//     console.log(res);
//     someOtherActionPromise("example of nested Promise")
//       .then((res) => {
//         console.log(res);
//         promiseHellAction("This is 3rd nested Promise(Promise hell)")
//           .then((res) => console.log(res))
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// console.log("nested Promise end");

/********************************Promises Chaining******************************* */
// someActionPromise("welcome to Promise async world")
//   .then((res) => {
//     console.log(res);
//     return someOtherActionPromise("example of nested Promise");
//   })
//   .then((res) => {
//     console.log(res);
//     return promiseHellAction("This is 3rd nested Promise(Promise hell)");
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

/********************************Promise All******************************* */

// Promise.all([
//   someActionPromise("welcome to Promise async world"),
//   someOtherActionPromise("example of nested Promise"),
//   promiseHellAction("This is 3rd nested Promise(Promise hell)"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("error in promise", err));

/********************************Promise race******************************* */

// Promise.race([
//   someActionPromise("welcome to Promise async world"),
//   someOtherActionPromise("example of nested Promise"),
//   promiseHellAction("This is 3rd nested Promise(Promise hell)"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("error in promise", err));

/********************************Promise allSettled******************************* */

// Promise.allSettled([
//   someActionPromise("welcome to Promise async world"),
//   someOtherActionPromise("example of nested Promise"),
//   promiseHellAction("This is 3rd nested Promise(Promise hell)"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("error in promise", err));

/********************************Promise any******************************* */

Promise.any([
  someActionPromise("welcome to Promise async world"),
  someOtherActionPromise("example of nested Promise"),
  promiseHellAction("This is 3rd nested Promise(Promise hell)"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log("error in promise", err));
