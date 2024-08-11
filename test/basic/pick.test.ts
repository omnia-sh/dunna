import { describe, expect, test } from "bun:test";
import { dunna } from "../../src";

describe("Test dunna.basic.pick() function", () => {
  test("check if all elements are contained from the array", () => {
    for (let i = 0; i < 100; i++) {
      const nums = [1, 2, 3, 4, 5, 6];

      const picks = dunna.basic.pick(3, nums);

      expect(picks.every((pick) => nums.includes(pick))).toBe(true);

      expect(picks.length).toEqual(3);
    }
  });

  test("throw error when count is less than 0", () => {
    expect(() => dunna.basic.pick(-1, [1, 2, 3])).toThrowError();
  });

  test("throw error when count is bigger than the array length", () => {
    expect(() => dunna.basic.pick(10, [1, 2, 3])).toThrowError();
  });

  test("throw error when count type is float", () => {
    expect(() => dunna.basic.pick(5.2, [1, 2, 3])).toThrowError();
  });
});
