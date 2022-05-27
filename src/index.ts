import { basic, location, finance, person } from './modules';

const dunna = {
  ...basic,
  ...location,
  ...finance,
  ...person,
};

export default dunna;

export * from './modules/basic';
export * from './modules/location';
