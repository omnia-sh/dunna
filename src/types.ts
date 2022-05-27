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
