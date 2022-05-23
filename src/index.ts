import { basic, location } from './functions';

const dunna = {
  ...basic,
  ...location,
};

export default dunna;

export * from './functions/basic';
export * from './functions/location';
