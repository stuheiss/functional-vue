var curry = require('lodash.curry');

// return some number of elements from the front of a list
export function take(n: number, xs: any) {
  return n < 0 ? [] : n > xs.length ? xs : xs.slice(0, n);
}
