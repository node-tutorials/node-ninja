// Global Object

console.log(global);

/* 
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}

*/

// setTimeout(() => {
//   console.log("In timeout");
// }, 1000);

// /Volumes/code/tutorials/node/node-ninja/2
// console.log(__dirname);

// /Volumes/code/tutorials/node/node-ninja/2/global.js
// console.log(__filename);
