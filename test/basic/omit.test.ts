import { describe, expect, test } from "bun:test";
import dunna from "../../src";

describe("Test dunna.basic.omit() function", () => {
  test("check if count elements are deleted from the array", () => {
    for (let i = 0; i < 100; i++) {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8];

      const result = dunna.basic.omit(3, nums);

      expect(result.every((el) => nums.includes(el))).toBe(true);

      expect(result.length).toEqual(5);
    }
  });

  test("throw error when count is less than 0", () => {
    expect(() => dunna.basic.omit(-1, [1, 2, 3])).toThrowError();
  });

  test("throw error when count is bigger than the array length", () => {
    expect(() => dunna.basic.omit(10, [1, 2, 3])).toThrowError();
  });

  test("throw error when count type is float", () => {
    expect(() => dunna.basic.omit(5.2, [1, 2, 3])).toThrowError();
  });
});
