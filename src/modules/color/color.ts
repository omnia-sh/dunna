import colors from "../../database/color";
import { choice } from "../basic";

function color() {
    return choice(colors);
  }
  
  export default color;
  