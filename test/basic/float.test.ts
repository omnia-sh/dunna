import { describe, expect, test } from "bun:test";
import { dunna } from "@";

describe("Test dunna.basic.float() function", () => {
  test("generate a random float number", () => {
    const number = dunna.basic.float();

    expect(Number.parseFloat(number.toString())).toEqual(number);
  });

  test("generate a random float number without params", () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.basic.float();

      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThan(10);
    }
  });

  test("generate a random float number with `fixed` number of decimal points", () => {
    for (let i = 1; i <= 5; i++) {
      const fixed = i;

      const number = dunna.basic.float({ fixed }).toString().split(".");

      expect(number[1].length).toBeLessThanOrEqual(fixed);
    }
  });

  test("generate a random float with specified min", () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.basic.float({ min: 5.5 });

      expect(number).toBeGreaterThanOrEqual(5.5);
      expect(number).toBeLessThan(10);
    }
  });

  test("generate a random float with specified max", () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.basic.float({ max: 50.4 });

      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThan(50.4);
    }
  });

  test("generate a random float with specified min and max", () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.basic.float({ min: 5, max: 50.7 });

      expect(number).toBeGreaterThanOrEqual(5);
      expect(number).toBeLessThan(50.7);
    }
  });
});
