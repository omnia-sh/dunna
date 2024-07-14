import choice from "../basic/choice";
import country from "./country";

function city() {
  return choice(country().cities);
}

export default city;
