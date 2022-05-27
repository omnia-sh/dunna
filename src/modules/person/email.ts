import firstName from './first-name';
import lastName from './last-name';

interface EmailParams {
  domain?: string;
}

function email({ domain }: EmailParams) {
  return `${firstName()}_${lastName()}@${domain}`;
}

export default email;
