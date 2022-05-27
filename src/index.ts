import { basic, location, finance } from './modules';

const dunna = {
  ...basic,
  ...location,
  ...finance,
};

export default dunna;

export * from './modules/basic';
export * from './modules/location';
