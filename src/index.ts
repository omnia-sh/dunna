import { basic, location, finance } from './functions';

const dunna = {
  ...basic,
  ...location,
  ...finance,
};

export default dunna;

export * from './functions/basic';
export * from './functions/location';
