const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn?.(...args));

export { callAll };

// const callAll = function (...fns) {
//   return function (...args) {
//       fns.forEach((fn) => fn?.(...args));
//     }
// }

// const callFns = callAll (
//   undefined,
//   (a, b) => console.log(a + b + 10),
//   (a, b) => console.log(a + b + 20),
//   (a, b) => console.log(a + b + 30),
// );

// callFns(1, 2);
