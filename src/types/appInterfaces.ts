export interface AppState {
  planets: PlanetInterface[];
  characters: CharacterInterface[];
  planetDetails: PlanetInterface;
  characterDetails: CharacterInterface;
  currentPagePlanets: number;
  currentPageCharacters: number;
}

export interface PlanetsInterface {
  results: PlanetInterface[];
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
  results: CharacterInterface[];
}
export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
  created: string;
}
