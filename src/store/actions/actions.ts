import {
  CharactersInterface,
  PlanetInterface,
} from "../../types/appInterfaces";

export type AppActions = PlanetActions | CharacterActions | PaginationActions;

export enum ActionTypes {
  INITIALIZE_PLANETS = "initializePlanets",
  REMOVE_PLANET = "removePlanet",
  INITIALIZE_CHARACTERS = "initializeCharacters",
  REMOVE_CHARACTER = "removeCharacter",
  GO_TO_NEXT_PAGE = "goToNextPage",
  GO_TO_PREV_PAGE = "goToPrevPage",
}

export type PlanetActions =
  | { type: ActionTypes.INITIALIZE_PLANETS; payload: PlanetInterface[] }
  | { type: ActionTypes.REMOVE_PLANET; payload: PlanetInterface["id"] };

export type CharacterActions =
  | { type: ActionTypes.INITIALIZE_CHARACTERS; payload: CharactersInterface[] }
  | { type: ActionTypes.REMOVE_CHARACTER; payload: CharactersInterface["id"] };

export type PaginationActions =
  | { type: ActionTypes.GO_TO_NEXT_PAGE; payload: number }
  | { type: ActionTypes.GO_TO_PREV_PAGE };
