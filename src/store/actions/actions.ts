import { Character, FavCharacter, Planet } from "../../types/appInterfaces";

export type AppActions = PlanetActions | CharacterActions | FavoriteActions;

export enum ActionTypes {
  GET_PLANETS = "getPlanets",
  REMOVE_PLANET = "removePlanet",
  NEXT_PAGE_PLANETS = "nextPagePlanets",
  PREV_PAGE_PLANETS = "prevPagePlanets",
  GET_CHARACTERS = "getCharacters",
  REMOVE_CHARACTER = "removeCharacter",
  NEXT_PAGE_CHARACTERS = "nextPageCharacters",
  PREV_PAGE_CHARACTERS = "prevPageCharacters",
  GET_PLANET_DETAILS = "getPlanetDetails",
  GET_CHARACTER_DETAILS = "getCharacterDetails",
  GET_FAV_CHARACTERS = "getFavCharacters",
  ADD_FAV_CHARACTER = "addFavCharacter",
  CHANGE_FAV_CHARACTER_NAME = "changeFavCharacterName",
  SET_FAV_CHARACTER_RATING = "setFavCharacterRating",
  REMOVE_FAV_CHARACTER = "removeFavCharacter",
}

export type PlanetActions =
  | { type: ActionTypes.GET_PLANETS; payload: Planet[] }
  | { type: ActionTypes.REMOVE_PLANET; payload: Planet["id"] }
  | { type: ActionTypes.NEXT_PAGE_PLANETS; payload: number }
  | { type: ActionTypes.PREV_PAGE_PLANETS }
  | { type: ActionTypes.GET_PLANET_DETAILS; payload: Planet };

export type CharacterActions =
  | { type: ActionTypes.GET_CHARACTERS; payload: Character[] }
  | { type: ActionTypes.REMOVE_CHARACTER; payload: Character["id"] }
  | { type: ActionTypes.NEXT_PAGE_CHARACTERS; payload: number }
  | { type: ActionTypes.PREV_PAGE_CHARACTERS }
  | { type: ActionTypes.GET_CHARACTER_DETAILS; payload: Character };

export type FavoriteActions =
  | {
      type: ActionTypes.GET_FAV_CHARACTERS;
    }
  | {
      type: ActionTypes.ADD_FAV_CHARACTER;
      payload: FavCharacter;
    }
  | {
      type: ActionTypes.CHANGE_FAV_CHARACTER_NAME;
      payload: [FavCharacter["id"], FavCharacter["name"]];
    }
  | {
      type: ActionTypes.SET_FAV_CHARACTER_RATING;
      payload: [FavCharacter["id"], FavCharacter["rating"]];
    }
  | {
      type: ActionTypes.REMOVE_FAV_CHARACTER;
      payload: FavCharacter["id"];
    };
