import type { Gender } from "../../types";
import choice from "../basic/choice";

export default function gender(): Gender {
  return choice(["male", "female"]);
}
