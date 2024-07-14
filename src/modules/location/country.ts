import { basic } from "..";
import { countries } from "../../database";

function country() {
  return basic.choice(countries);
}

export default country;
