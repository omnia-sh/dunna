import firstName from './first-name';
import lastName from './last-name';
import type { Gender } from '../../types';

interface EmailParams {
  domain?: string;
  gender?: Gender | 'any';
}

function email({ domain = 'example.com', gender = 'any' }: EmailParams = {}) {
  const fName = firstName({ gender });
  const lname = lastName();

  return `${fName.toLowerCase()}_${lname.toLowerCase()}@${domain}`;
}

export default email;
