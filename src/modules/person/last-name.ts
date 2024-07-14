import { lastNames } from "../../database";
import { choice } from "../basic";

function lastName(): string {
  return choice(lastNames);
}

export default lastName;
