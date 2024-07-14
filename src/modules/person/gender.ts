import type { Gender } from "../../types";
import { choice } from "../basic";

function gender(): Gender {
  return choice(["male", "female"]);
}

export default gender;
