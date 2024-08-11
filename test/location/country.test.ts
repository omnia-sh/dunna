import { describe, expect, test } from "bun:test";
import { countries } from "@/database";
import country from "@/modules/location/country";
import { dunna } from "dunna";

describe("Test country functions", () => {
  test("return a valid country from the list", () => {
    expect(countries).toContainEqual(country());
  });

  test("return a valid country code", () => {
    const countriesCodes = countries.map((item) => item.ISO2);

    expect(countriesCodes).toContain(dunna.location.countryCode());
  });

  test("return a valid country name", () => {
    const countriesNames = countries.map((item) => item.name);

    expect(countriesNames).toContain(dunna.location.countryName());
  });
});
