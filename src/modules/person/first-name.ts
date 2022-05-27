import { firstNames } from './data';
import { choice } from '../basic';

interface FirstNameParams {
  gender?: 'male' | 'female';
}

function firstName(params: FirstNameParams = {}): string {
  const gender = params.gender || choice(['male', 'female']);

  return choice(firstNames[gender]);
}

export default firstName;
