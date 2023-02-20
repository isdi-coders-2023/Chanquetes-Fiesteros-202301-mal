export interface AppState {
  planets: Planet[];
  characters: Character[];
  planetDetails: Planet;
  characterDetails: Character;
  currentPagePlanets: number;
  currentPageCharacters: number;
  favCharacter: FavCharacter;
  favCharacters: FavCharacter[];
}

export interface Planets {
  results: Planet[];
}
export interface Planet {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
  residents: string[];
}

export interface Characters {
  results: Character[];
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
  created: string;
}

export interface FavCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
  created: string;
  rating: number;
}
