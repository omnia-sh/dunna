

import colors from "../../database/color";
import { choice } from "../basic";

function colorName() {
    return choice(colors).name;
  }
  
export default colorName;