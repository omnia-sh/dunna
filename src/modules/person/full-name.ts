import firstName from './first-name';
import lastName from './last-name';
import type { Gender } from '../../types';

interface NameParams {
  gender?: Gender | 'any';
}

function name({ gender }: NameParams = {}) {
  return `${firstName({ gender })} ${lastName()}`;
}

export default name;
