export interface AppState {
  planets: PlanetInterface[];
  characters: CharactersInterface[];
  pagination: number;
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
  image: string;
  url: string;
  created: string;
}
