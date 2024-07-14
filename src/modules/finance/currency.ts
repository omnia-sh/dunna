import { currencies } from "../../database";
import { choice } from "../basic";

function currency() {
  return choice(currencies);
}

export default currency;
