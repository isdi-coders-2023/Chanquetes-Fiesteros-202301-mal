export interface AppState {
  planets: PlanetInterface[];
  characters: CharactersInterface[];
}

export interface PlanetInterface {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
  residents: string[];
}

export interface CharactersInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  url: string;
  created: string;
}
