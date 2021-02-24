import { take } from "@/lib/take.ts";

describe("take", () => {
  it("takes some number of elements from the front of a list", () => {
    const list = [1, 2, 3, 4, 5];
    expect(take(0, list)).toEqual([]);
    expect(take(-1, list)).toEqual([]);
    expect(take(3, list)).toEqual([1, 2, 3]);
    expect(take(4, list)).toEqual([1, 2, 3, 4]);
    expect(take(5, list)).toEqual([1, 2, 3, 4, 5]);
    expect(take(6, list)).toEqual([1, 2, 3, 4, 5]);
  });
});
