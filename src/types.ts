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
