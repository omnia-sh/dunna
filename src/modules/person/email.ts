import firstName from './first-name';
import lastName from './last-name';

interface EmailParams {
  domain?: string;
}

function email({ domain = 'example.com' }: EmailParams) {
  return `${firstName().toLowerCase()}_${lastName().toLocaleLowerCase()}@${domain}`;
}

export default email;
