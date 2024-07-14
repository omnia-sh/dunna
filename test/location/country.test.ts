import { describe, expect, test } from "bun:test";
import dunna from "../../src";
import { countries } from "../../src/database";
import country from "../../src/modules/location/country";

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
