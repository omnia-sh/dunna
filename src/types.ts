export interface Currency {
  code: string;
  name: string;
}

export interface Country {
  name: string;
  ISO2: string;
  ISO3: string;
  cities: {
    name: string;
    lng: string;
    lat: string;
  }[];
}

export interface Latters {
  all: string;
  upper: string;
  lower: string;
}

export type Gender = 'male' | 'female';

export interface Person {
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
}

export interface Color {
  name: string;
  hex: string;
  rgb: RGB;
}

export interface RGB {
  red:number
  green:number
  blue:number
}