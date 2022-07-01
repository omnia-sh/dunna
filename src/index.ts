import { basic, location, finance, person, color } from './modules';

const dunna = {
  ...basic,
  ...location,
  ...finance,
  ...person,
  ...color,
};

export default dunna;

export * from './modules/basic';
export * from './modules/location';
