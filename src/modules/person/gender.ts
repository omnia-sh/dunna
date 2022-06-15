import { choice } from '../basic';
import type { Gender } from '../../types';

function gender(): Gender {
  return choice(['male', 'female']);
}

export default gender;
