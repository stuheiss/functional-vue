const curry = require("lodash.curry");
// require('pointfree-fantasy').expose(global); // or if browser pointfree.expose(window)
// var Maybe = require("pointfree-fantasy/instances/maybe");

// return some number of elements from the front of a list
export function take1(n: number, xs: unknown[]): unknown[] {
  return n < 0 ? [] : n > xs.length ? xs : xs.slice(0, n);
}
// same as take using arrow function
export const take2 = (n: number, xs: unknown[]): unknown[] =>
  n < 0 ? [] : n > xs.length ? xs : xs.slice(0, n);

// function _take(n: number, xs: unknown[]): unknown[] {
//   return n < 0 ? [] : n > xs.length ? xs : xs.slice(0, n);
// }
const _take = (n: number, xs: unknown[]): unknown[] =>
  n < 0 ? [] : n > xs.length ? xs : xs.slice(0, n);

// composable (curried) version of take
export const take = curry(_take);
