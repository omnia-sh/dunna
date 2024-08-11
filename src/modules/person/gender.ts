import choice from "@/modules/basic/choice";
import type { Gender } from "@/types";

export default function gender(): Gender {
  return choice(["male", "female"]);
}
