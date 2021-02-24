const curry = require("lodash.curry");
const Maybe = require('folktale/maybe');
const Just = Maybe.Just;
const Nothing = Maybe.Nothing;
const Result = require('folktale/result');

//TODO:
// Promise, Future, Task
// Promise to Future

// var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

// require('../../src/lib/support/lambdajs/utils').expose(global);
// require('../../src/lib/support/lambdajs/lambda').expose();
// require('pointfree-fantasy').expose(global);
// require('lenses').expose(global);

// var Maybe = require('pointfree-fantasy/instances/maybe');
// var Either = require('pointfree-fantasy/instances/either');
// var Promise = require('../support/promise');
// var fs = require('../support/node-promise/fs-promise');
// var readFile = function(path: string) { return fs.readFile(path, 'utf-8') };

const map = curry(function(f: any, u: any): any {
  return u.fmap ? u.fmap(f) : u.map(f); //sometimes map passes index so we use fmap if it has it.
});

describe("play", () => {
  it("has Result", () => {
    const divideBy = (dividend: number, divisor: number): number =>
      divisor === 0
        ? Result.Error("Division by zero")
        : Result.Ok(Math.floor(dividend / divisor));

    const resOk = divideBy(4, 2);
    expect(resOk).toEqual(Result.Ok(2));
    expect(Result.Error.hasInstance(resOk)).toBe(false); // preferred type check

    const resError = divideBy(4, 0);
    expect(resError).toEqual(Result.Error("Division by zero"));
    expect(Result.Error.hasInstance(resError)).toBe(true); // preferred type check
  });

  it("has Maybe", () => {
    const toUpperCase = (x: string): string => x.toUpperCase();

    const resJust = map(toUpperCase, Just("mystring"));
    expect(resJust.getOrElse("_nothing_found_")).toEqual("MYSTRING");
    expect(Nothing.hasInstance(resJust)).toBe(false); // preferred type check
    expect(resJust).not.toEqual(Nothing());

    const resNothing = map(toUpperCase, Nothing());
    expect(resNothing.getOrElse("_nothing_found_")).toEqual("_nothing_found_");
    expect(Nothing.hasInstance(resNothing)).toBe(true); // preferred type check
    expect(resNothing).toEqual(Nothing());
  });
});
