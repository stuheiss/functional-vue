import { take1, take2, take } from "@/lib/pointfree";
// import { compose } from "folktale/compose";
// lambda: require('./lambda')
// object: require('./object')
// import { compose } from "folktale";
// const curry = require("lodash.curry");
const Maybe = require("folktale/maybe");
const Just = Maybe.Just;
const Nothing = Maybe.Nothing;
const Result = require("folktale/result");
const { lambda, object } = require("folktale/core");
// lambda: identity, constant, curry, compose, partialize
// object: mapEntries, mapValues, values, toPairs, fromPairs
const curry = lambda.curry;
const compose = lambda.compose;

describe("take", () => {
  it("take1 takes some number of elements from the front of a list", () => {
    const list = [1, 2, 3, 4, 5];
    expect(take1(0, list)).toEqual([]);
    expect(take1(-1, list)).toEqual([]);
    expect(take1(3, list)).toEqual([1, 2, 3]);
    expect(take1(4, list)).toEqual([1, 2, 3, 4]);
    expect(take1(5, list)).toEqual([1, 2, 3, 4, 5]);
    expect(take1(6, list)).toEqual([1, 2, 3, 4, 5]);
  });
  it("take2 takes some number of elements from the front of a list", () => {
    const list = [1, 2, 3, 4, 5];
    expect(take2(0, list)).toEqual([]);
    expect(take2(-1, list)).toEqual([]);
    expect(take2(3, list)).toEqual([1, 2, 3]);
    expect(take2(4, list)).toEqual([1, 2, 3, 4]);
    expect(take2(5, list)).toEqual([1, 2, 3, 4, 5]);
    expect(take2(6, list)).toEqual([1, 2, 3, 4, 5]);
  });
  it("take takes some number of elements from the front of a list", () => {
    // curried ver, test both calling methods
    const list = [1, 2, 3, 4, 5];
    expect(take(0, list)).toEqual([]);
    expect(take(0)(list)).toEqual([]);
    expect(take(-1, list)).toEqual([]);
    expect(take(-1)(list)).toEqual([]);
    expect(take(3, list)).toEqual([1, 2, 3]);
    expect(take(3)(list)).toEqual([1, 2, 3]);
    expect(take(4, list)).toEqual([1, 2, 3, 4]);
    expect(take(4)(list)).toEqual([1, 2, 3, 4]);
    expect(take(5, list)).toEqual([1, 2, 3, 4, 5]);
    expect(take(5)(list)).toEqual([1, 2, 3, 4, 5]);
    expect(take(6, list)).toEqual([1, 2, 3, 4, 5]);
    expect(take(6)(list)).toEqual([1, 2, 3, 4, 5]);
  });
  it("composes functions", () => {
    const capitalize = (str: string): string =>
      str.charAt(0).toUpperCase() + str.slice(1);
    const reverse = (str: string): string =>
      Array.from(str)
        .reverse()
        .join("");
    const reverseCap = compose(capitalize, reverse);
    expect(reverseCap("hello")).toEqual("Olleh");
  });
});
