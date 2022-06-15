import { choice } from '../basic';
import type { Gender } from '../../types';
import { maleFirstNames, femaleFirstNames } from '../../database';

interface FirstNameParams {
  gender?: Gender;
}

function firstName(params: FirstNameParams = {}): string {
  const gender = params.gender || choice(['male', 'female']);

  return choice(gender === 'male' ? maleFirstNames : femaleFirstNames);
}

export default firstName;
