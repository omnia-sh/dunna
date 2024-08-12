import { describe, expect, test } from "bun:test";
import { dunna } from "@";

describe("Test dunna.basic.integer() function", () => {
  test("generate a random integer without floating point", () => {
    const number = dunna.basic.integer();

    expect(Number.parseInt(number.toString())).toEqual(number);
  });

  test("throw error when specify float as min or max", () => {
    expect(() => dunna.basic.integer({ min: 5.3 })).toThrowError();

    expect(() => dunna.basic.integer({ max: 95.7 })).toThrowError();
  });

  test("generate a random integer without params", () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.basic.integer();

      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThan(10);
    }
  });

  test("generate a random integer with specified min", () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.basic.integer({ min: 5 });

      expect(number).toBeGreaterThanOrEqual(5);
      expect(number).toBeLessThan(10);
    }
  });

  test("generate a random integer with specified max", () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.basic.integer({ max: 50 });

      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThan(50);
    }
  });

  test("generate a random integer with specified min and max", () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.basic.integer({ min: 5, max: 50 });

      expect(number).toBeGreaterThanOrEqual(5);
      expect(number).toBeLessThan(50);
    }
  });
});
