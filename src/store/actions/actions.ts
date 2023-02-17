import { CharacterInterface, PlanetInterface } from "../../types/appInterfaces";

export type AppActions = PlanetActions | CharacterActions;

export enum ActionTypes {
  GET_PLANETS = "getPlanets",
  REMOVE_PLANET = "removePlanet",
  NEXT_PAGE_PLANETS = "nextPagePlanets",
  PREV_PAGE_PLANETS = "prevPagePlanets",
  GET_CHARACTERS = "getCharacters",
  REMOVE_CHARACTER = "removeCharacter",
  NEXT_PAGE_CHARACTERS = "nextPageCharacters",
  PREV_PAGE_CHARACTERS = "prevPageCharacters",
}

export type PlanetActions =
  | { type: ActionTypes.GET_PLANETS; payload: PlanetInterface[] }
  | { type: ActionTypes.REMOVE_PLANET; payload: PlanetInterface["id"] }
  | { type: ActionTypes.NEXT_PAGE_PLANETS; payload: number }
  | { type: ActionTypes.PREV_PAGE_PLANETS };

export type CharacterActions =
  | { type: ActionTypes.GET_CHARACTERS; payload: CharacterInterface[] }
  | { type: ActionTypes.REMOVE_CHARACTER; payload: CharacterInterface["id"] }
  | { type: ActionTypes.NEXT_PAGE_CHARACTERS; payload: number }
  | { type: ActionTypes.PREV_PAGE_CHARACTERS };
