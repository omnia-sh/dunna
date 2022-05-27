import { maleFirstNames, femaleFirstNames } from '../../database';
import { choice } from '../basic';

interface FirstNameParams {
  gender?: 'male' | 'female';
}

function firstName(params: FirstNameParams = {}): string {
  const gender = params.gender || choice(['male', 'female']);

  return choice(gender === 'male' ? maleFirstNames : femaleFirstNames);
}

export default firstName;
