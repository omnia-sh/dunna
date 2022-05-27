import { choice } from '../basic';
import firstName from './first-name';
import lastName from './last-name';

interface NameParams {
  gender?: 'male' | 'female';
}

function name(params: NameParams = {}) {
  const gender = params.gender || choice(['male', 'female']);

  return `${firstName({ gender })} ${lastName()}`;
}

export default name;
