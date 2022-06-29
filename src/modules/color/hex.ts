
import colors from "../../database/color";
import { choice } from "../basic";

function hex() {
    return choice(colors).hex;
  }
  
export default hex;