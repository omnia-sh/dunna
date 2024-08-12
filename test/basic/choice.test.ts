import { describe, expect, test } from "bun:test";
import { dunna } from "@";

describe("Test dunna.basic.choice() function", () => {
  test("return a valid number choice", () => {
    for (let i = 0; i < 100; i++) {
      const nums = [1, 2, 3, 4, 5, 6];

      const num = dunna.basic.choice(nums);

      expect(nums).toContain(num);
    }
  });

  test("return a valid string choice", () => {
    for (let i = 0; i < 100; i++) {
      const names = ["Alice", "Bob", "Charlie"];

      const name = dunna.basic.choice(names);

      expect(names).toContain(name);
    }
  });
});
