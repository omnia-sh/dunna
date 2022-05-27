import { lastNames } from './data';
import { choice } from '../basic';

function lastName(): string {
  return choice(lastNames);
}

export default lastName;
