import firstName from './first-name';
import lastName from './last-name';
import { choice } from '../basic';
import type { Gender } from '../../types';

interface NameParams {
  gender?: Gender;
}

function name(params: NameParams = {}) {
  const gender = params.gender || choice(['male', 'female']);

  return `${firstName({ gender })} ${lastName()}`;
}

export default name;
