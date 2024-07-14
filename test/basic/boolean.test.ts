import { describe, expect, test } from "bun:test";

import dunna from "../../src";

describe("Test dunna.basic.boolean() function", () => {
  test("return a boolean", () => {
    const boolean = dunna.basic.boolean();

    expect([true, false]).toContain(boolean);
  });

  test("throw error when likliehood < 0 or > 100", () => {
    expect(() => dunna.basic.boolean({ likelihood: -1 })).toThrowError();

    expect(() => dunna.basic.boolean({ likelihood: 101 })).toThrowError();
  });

  test("return true when likelihood = 100", () => {
    for (let i = 0; i < 100; i++) {
      const boolean = dunna.basic.boolean({ likelihood: 100 });

      expect(boolean).toEqual(true);
    }
  });

  test("return false when likelihood = 0", () => {
    for (let i = 0; i < 100; i++) {
      const boolean = dunna.basic.boolean({ likelihood: 0 });

      expect(boolean).toEqual(false);
    }
  });

  test("return boolean based on likelihood", () => {
    for (const likelihood of [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 99]) {
      const cycles = 10000;

      let trues = 0;

      for (let i = 0; i < cycles; i++) {
        const boolean = dunna.basic.boolean({ likelihood });

        if (boolean) {
          trues++;
        }
      }

      const truePercentage = (trues / cycles) * 100;

      expect(truePercentage).toBeGreaterThan(likelihood - 2.5);
      expect(truePercentage).toBeLessThan(likelihood + 2.5);
    }
  });
});
